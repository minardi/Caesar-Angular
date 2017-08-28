import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap';
import { UpdateGroupService } from '../../common/services/update-group.service';
import { ProfileService } from '../../profile/profile.service';
import { Location } from '../../common/models/location';
import { User } from '../../common/models/user';
import { Direction } from '../../common/models/direction';
import { BudgetOwner } from '../../common/models/budgetOwner';
import { Stage } from '../../common/models/stage';
import { Group } from '../../common/models/group';

@Component({
  selector: 'caesar-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit, OnChanges {
  isEditMode = true;
  allowedRole = 4;
  currentUser: User;
  groups: Group[];
  stages: Stage[];
  locations: Location[];
  directions: Direction[];
  budgetOwners: BudgetOwner[];
  groupName: string;
  tmpGroupName: string;
  selectedStage: any;
  selectedLocation: any;
  selectedDirection: any;
  selectedBudgetOwner: any;
  error: any;
  dateStart: any;
  dateFinish: any;
  isShownDatepickerStart = false;
  isShownDatepickerFinish = false;
  isShownSwitchName = false;
  locationNamesAlias = {
    1: 'DP',
    2: 'SF',
    3: 'LV',
    4: 'CH',
    5: 'KV'
  };
  @Output() onGroupUpdated = new EventEmitter<number>();
  @HostListener('document:keypress', ['$event'])

  handleKeyboardEvent(event: KeyboardEvent) {
    const enterButton = 13;
    if (event.keyCode === enterButton) {
      this.updateGroup();
    }
  }

  constructor(
    public bsModalRef: BsModalRef,
    private profileService: ProfileService,
    private updateGroupService: UpdateGroupService,
    private datePipe: DatePipe
  ) { }

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
        if (typeof this.isEditMode !== 'undefined') {
          if (!this.isEditMode) {
            this.generateName();
          }
        }
      },
      error => console.log(error));
  }

  private showAllDirections() {
    this.updateGroupService.getDirections().subscribe(
      (data: Direction[]) => {
        this.directions = data;
        this.selectedDirection = this.directions[0];
        if (typeof this.isEditMode !== 'undefined') {
          if (!this.isEditMode) {
            this.generateName();
          }
        }
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
    this.generateName();
  }

  public changeSelectedDirection(direction) {
    this.selectedDirection = direction;
    this.generateName();
    this.calculateFinishDate();
  }

  public changeSelectedStage(stage) {
    this.selectedStage = stage;
  }

  public changeSelectedBudgetOwner(budgetOwner) {
    this.selectedBudgetOwner = budgetOwner;
  }

  public isActive(budgetOwner) {
    return this.selectedBudgetOwner === budgetOwner;
  }

  // autogeneration group's name

  public generateName () {
    let result = '';
    if (this.selectedLocation) {
      result += `${this.locationNamesAlias[this.selectedLocation.id]}-`;
      result += this.findLastInLocation(this.parseGroupsNames());
      if (this.selectedDirection) {
        result += `-${this.selectedDirection.name}`;
      }
    }
    this.tmpGroupName = result;
    this.groupName = result;
    this.isShownSwitchName = false;
  }

  public parseGroupsNames (): Group[] {
    const locationAlias = this.locationNamesAlias[this.selectedLocation.id],
      pattern = new RegExp(locationAlias),
      filteredGroups = this.groups.filter((value) => {
        return value.name.match(pattern);
      });
    return filteredGroups;
  }

  public findLastInLocation (filteredGroups: Group[]): string {
    let result = '',
      tmpString = '',
      lastGroup = filteredGroups[0];
    for (let i = 0; i < filteredGroups.length; i++) {
      if (filteredGroups[i].groupId > lastGroup.groupId) {
        lastGroup = filteredGroups[i];
      }
    }
    tmpString = lastGroup.name.substring(lastGroup.name.indexOf('-') + 1, lastGroup.name.lastIndexOf('-'));
    if (Number(tmpString)) {
      result += (Number(tmpString) + 1);
    }
    return result;
  }

  public switchGroupName () {
    const gName = this.groupName,
      tmpGName = this.tmpGroupName;
    this.groupName = tmpGName;
    this.tmpGroupName = gName;
  }

  public onNameModelChange(event) {
    this.compareGeneratedGroupNames();
  }

  public compareGeneratedGroupNames () {
    if (this.tmpGroupName !== this.groupName) {
      this.isShownSwitchName = true;
    }
  }

  // datepicker methods

  public toggleDatepicker(shownDatepicker) {
    this[shownDatepicker] = !this[shownDatepicker];
  }

  public selectionDone(shownDatepicker) {
    this[shownDatepicker] = false;
  }

  public calculateFinishDate() {
    if (this.dateStart) {
      const start = new Date(this.dateStart),
        shortDuration = 63,
        longDuration = 84;
      if (this.selectedDirection.id === 12 || this.selectedDirection.id === 14) {
        this.dateFinish = new Date(start.setDate(start.getDate() + shortDuration));
        this.shiftWeekends();
      } else {
        this.dateFinish = new Date(start.setDate(start.getDate() + longDuration));
        this.shiftWeekends();
      }
    }
  }

  public shiftWeekends() {
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

  // update group api

  public updateGroup() {
    const group = {
      name: this.groupName,
      // TODO Serj
      experts: ['sergey', 'andrey'],
      location: {id: this.selectedLocation.id},
      specialization: {id: this.selectedDirection.id},
      budgetOwner: {id: this.selectedBudgetOwner.id},
      startDate: this.datePipe.transform(this.dateStart, 'y-MM-dd'),
      finishDate: this.datePipe.transform(this.dateFinish, 'y-MM-dd'),
      // TODO Serj
      teachers: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    };

    this.updateGroupService.update(group).subscribe(
      data => {
        this.bsModalRef.hide();
        this.onGroupUpdated.emit();
      },
      error => console.log(error));
  }
}
