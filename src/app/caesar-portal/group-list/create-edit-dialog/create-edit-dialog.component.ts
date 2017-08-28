import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UpdateGroupService } from '../../common/services/update-group.service';
import { Location } from '../../common/models/location';
import { ProfileService } from '../../profile/profile.service';
import { User } from '../../common/models/user';
import { Response } from '@angular/http';
import { Direction } from '../../common/models/direction';
import { BudgetOwner } from '../../common/models/budgetOwner';
import { DatePipe } from '@angular/common';
import {Stage} from "../../common/models/stage";

@Component({
  selector: 'caesar-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit, OnChanges {
  isEditMode: true;
  allowedRole = 4;
  currentUser: User;
  stages: Stage[];
  locations: Location[];
  directions: Direction[];
  budgetOwners: BudgetOwner[];
  teachers: {id: number}[];
  experts: string[];
  selectedStage: any;
  selectedLocation: any;
  selectedDirection: any;
  selectedBudgetOwner: any;
  error: any;
  dateStart: any;
  dateFinish: any;
  isShownDatepickerStart = false;
  isShownDatepickerFinish = false;
  @Output() onGroupUpdated = new EventEmitter<number>();
  @HostListener('document:keypress', ['$event'])


  handleKeyboardEvent(event: KeyboardEvent) {
    const enterButton = 13;
    if (event.keyCode === enterButton) {
      this.updateGroup();
    }
  }

  constructor(public bsModalRef: BsModalRef, private profileService: ProfileService,
              private updateGroupService: UpdateGroupService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.dateStart = new Date();
    this.dateFinish = new Date();
    this.getCurrentUserInfo();
    this.showAllDirections();
    this.showAllBudgetOwners();
    this.showAllStages();
  }

  ngOnChanges() {

  }

  public onTeachersChanged(teachers: {id: number}[]): void {
    this.teachers = teachers;
  }

  public onExpertsChanged(experts: string[]): void {
    this.experts = experts;
  }

  private getCurrentUserInfo(): void {
    this.profileService.getCurrentUser()
      .subscribe(
        (data: Response) => {
          this.currentUser = data.json();
          this.selectedLocation = this.currentUser.location;
          this.showAllLocations();
        },
        (error) => {
          this.error = error;
          console.error(error);
        }
      );
  }

  private showAllLocations() {
    this.updateGroupService.getLocations().subscribe(
      (data: Location[]) => {
        this.locations = data;
      },
      error => console.log(error));
  }

  private showAllDirections() {
    this.updateGroupService.getDirections().subscribe(
      (data: Direction[]) => {
        this.directions = data;
        this.selectedDirection = this.directions[0];
      },
      error => console.log(error));
  }

  private showAllBudgetOwners() {
    this.updateGroupService.getBudgetOwners().subscribe(
      (data: BudgetOwner[]) => {
        this.budgetOwners = data;
        this.selectedBudgetOwner = this.budgetOwners[0];
      },
      error => console.log(error));
  }

  private showAllStages() {
    this.updateGroupService.getStages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
        this.selectedStage = this.stages[0];
      },
      error => console.log(error));
  }

  public changeSelectedLocation(location) {
    this.selectedLocation = location;
  }

  public changeSelectedDirection(direction) {
    this.selectedDirection = direction;
    this.calculateFinishDate();
  }

  public changeSelectedBudgetOwner(budgetOwner) {
    this.selectedBudgetOwner = budgetOwner;
  }

  public changeSelectedStage(stage) {
    this.selectedStage = stage;
  }

  isActive(budgetOwner) {
    return this.selectedBudgetOwner === budgetOwner;
  }

  toggleDatepicker(shownDatepicker) {
    this[shownDatepicker] = !this[shownDatepicker];
  }

  selectionDone(shownDatepicker) {
    this[shownDatepicker] = false;
  }

  calculateFinishDate() {
    if (this.dateStart) {
      const start = new Date(this.dateStart),
        shortDuration = 63,
        longDuration = 84;
      if (this.selectedDirection.name === 'ISTQB' || this.selectedDirection.name === 'MQC') {
        this.dateFinish = new Date(start.setDate(start.getDate() + shortDuration));
        this.shiftWeekends();
      } else {
        this.dateFinish = new Date(start.setDate(start.getDate() + longDuration));
        this.shiftWeekends();
      }
    }
  }

  shiftWeekends() {
    const finish = new Date(this.dateFinish),
      saturday = 6,
      sunday = 0,
      saturdayInc = 2,
      sundayInc = 1;
    if (finish.getDay() === saturday) {
      this.dateFinish.setDate(this.dateFinish.getDate() + saturdayInc);
    } else if (finish.getDay() === sunday) {
      this.dateFinish.setDate(this.dateFinish.getDate() + sundayInc);
    }
  }

  public updateGroup() {
    const group = {
      // TODO Vlada Create group name autogeneration
      name: 'DP-test51154',
      // Done Serj
      experts: this.experts,
      location: {id: this.selectedLocation.id},
      specialization: {id: this.selectedDirection.id},
      budgetOwner: {id: this.selectedBudgetOwner.id},
      startDate: this.datePipe.transform(this.dateStart, 'y-MM-dd'),
      finishDate: this.datePipe.transform(this.dateFinish, 'y-MM-dd'),
      // DONE Serj
      teachers: this.teachers
    };

    this.updateGroupService.update(group).subscribe(
      data => {
        this.bsModalRef.hide();
        this.onGroupUpdated.emit();
      },
      error => console.log(error));
  }
}
