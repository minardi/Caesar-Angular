import { Component, EventEmitter, HostListener, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfileService } from '../../profile/profile.service';
import { Location } from '../../common/models/location';
import { User } from '../../common/models/user';
import { Direction } from '../../common/models/direction';
import { BudgetOwner } from '../../common/models/budgetOwner';
import { Stage } from '../../common/models/stage';
import { Group } from '../../common/models/group';
import { GroupService } from '../../common/services/group.service';
import { GroupInfoService } from '../../common/services/group-info.service';
import { ErrorHandlingService } from '../../common/services/error-handling.service';

@Component({
  selector: 'caesar-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit, OnChanges {
  isEditMode = true;
  allowedRole = 5;
  currentUser: User;
  editingGroup: Group;
  groups: Group[];
  stages: Stage[];
  locations: Location[];
  directions: Direction[];
  budgetOwners: BudgetOwner[];
  teachers: {id: number}[];
  experts: string[];
  groupName: string;
  tmpGroupName: string;
  selectedStage: any;
  selectedLocation: any;
  selectedDirection: any;
  selectedBudgetOwner: any;
  error: any;
  dateStart: any;
  dateFinish: any;
  datepickerOptions = {
    isShownDatepickerStart: false,
    isShownDatepickerFinish: false
  };
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
    private groupService: GroupService,
    private groupInfoService: GroupInfoService,
    private errorHandlingService: ErrorHandlingService,
    private datePipe: DatePipe,

  ) { }

  ngOnInit() {
    this.dateStart = new Date();
    this.dateFinish = new Date();
    this.getCurrentUserInfo();
    this.showAllDirections();
    this.showAllBudgetOwners();
    this.showAllStages();
    setTimeout(() => {
      if (typeof this.isEditMode !== 'undefined') {
        if (this.isEditMode) {
          if (this.editingGroup) {
            this.groupName = this.editingGroup.name;
            this.dateStart = new Date(this.editingGroup.startDate);
            this.dateFinish = new Date(this.editingGroup.finishDate);
            this.experts = this.editingGroup.experts;
            console.log(this.experts);
            this.getGroupLinkInfo('location', (foundLink) => {
              this.getGroupLocation(this.getPathname(foundLink));
            });
            this.getGroupLinkInfo('teachers', (foundLink) => {
              this.getGroupTeachers(this.getPathname(foundLink));
            });
          }
        }
      }
    }, 0);
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
          if (!this.isEditMode) {
            this.selectedLocation = this.currentUser.location;
            this.generateName();
          } else {
            this.getGroupLinkInfo('location', (foundLink) => {
              console.log( foundLink.charAt(foundLink.length - 1));
              this.selectedLocation = {id : foundLink.charAt(foundLink.length - 1)};
            });
          }
          this.showAllLocations();
        },
        (error) => this.errorHandlingService.check(error.status));
  }

  private showAllLocations() {
    this.groupInfoService.getLocations().subscribe(
      (data: Location[]) => {
        this.locations = data;
      },
      error => this.errorHandlingService.check(error.status));
  }

  private showAllDirections() {
    this.groupInfoService.getDirections().subscribe(
      (data: Direction[]) => {
        this.directions = data;
        this.selectedDirection = this.directions[0];
      },
      error => this.errorHandlingService.check(error.status));
  }

  private showAllBudgetOwners() {
    this.groupInfoService.getBudgetOwners().subscribe(
      (data: BudgetOwner[]) => {
        this.budgetOwners = data;
        this.selectedBudgetOwner = this.budgetOwners[0];
      },
      error => this.errorHandlingService.check(error.status));
  }

  private showAllStages() {
    this.groupInfoService.getStages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
        this.selectedStage = this.stages[0];
      },
      error => this.errorHandlingService.check(error.status));
  }

  private getGroupLinkInfo(rel, callback) {
    let foundLink;
    this.editingGroup.links.forEach((value) => {
      if (value.rel === rel) {
        foundLink = value.href;
      }
    });
    if (foundLink && callback) {
      callback(foundLink);
    }
  }

  private getPathname(href): string {
    const el = document.createElement('a');
    el.href = href;
    return `/api${el.pathname}`;
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
      result += `${this.locationNamesAlias[this.selectedLocation.id]}-${this.findLastInLocation(this.parseGroupsNames())}`;
      // result += this.findLastInLocation(this.parseGroupsNames());
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
    this.datepickerOptions[shownDatepicker] = !this.datepickerOptions[shownDatepicker];
  }

  public selectionDone(shownDatepicker) {
    this.datepickerOptions[shownDatepicker] = false;
  }

  public calculateFinishDate() {
    // "Finish date" – is calculated by default:
    // – "Start date" + 9 weeks for groups with "Direction" MQC (id = 12) or ISTQB (id = 14)
    // 9weeks * 7 days = 63 -> shortDuration
    // – "Start date" + 12 weeks for groups with any other "Direction"
    // 12weeks * 7 days = 84 -> longDuration
    if (!this.isEditMode) {
      if (this.dateStart) {
        let duration: number;
        const start = new Date(this.dateStart),
          shortDuration = 63,
          longDuration = 84;

        duration = (this.selectedDirection.id === 12 || this.selectedDirection.id === 14) ? shortDuration : longDuration;

        this.dateFinish = new Date(start.setDate(start.getDate() + duration));
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
      experts: this.experts,
      location: {id: this.selectedLocation.id},
      specialization: {id: this.selectedDirection.id},
      budgetOwner: {id: this.selectedBudgetOwner.id},
      startDate: this.datePipe.transform(this.dateStart, 'y-MM-dd'),
      finishDate: this.datePipe.transform(this.dateFinish, 'y-MM-dd'),
      teachers: this.teachers
    };

    if (!this.isEditMode) {
      this.createGroup(group);
    } else {
      this.editGroup(group);
    }
  }

  private createGroup (group) {
    this.groupService.create(group).subscribe(
      data => {
        this.bsModalRef.hide();
        this.onGroupUpdated.emit();
      },
      error => this.errorHandlingService.check(error.status));
  }

  private editGroup (group) {
    this.groupService.update(group, this.editingGroup.groupId).subscribe(
      data => {
        this.bsModalRef.hide();
        this.onGroupUpdated.emit();
      },
      error => this.errorHandlingService.check(error.status));
  }

  // Checking the getting details API
  public getGroupLocation(url: string) {
    this.groupInfoService.getGroupLocation(url).subscribe(
      (location: Location) => {
        this.selectedLocation['name'] = location.name;
      },
      error => this.errorHandlingService.check(error.status));
  }
  public getGroupDirection(url: string) {
    this.groupInfoService.getGroupDirection(url).subscribe(
      (direction: Direction) => {
        this.selectedDirection = direction;
      },
      error => this.errorHandlingService.check(error.status));
  }
  public getGroupStatus(url: string) {
    this.groupInfoService.getGroupStatus(url).subscribe(
      (status: any) => {
        this.selectedStage = status;
      },
      error => this.errorHandlingService.check(error.status));
  }
  public getGroupTeachers(url: string) {
    this.groupInfoService.getGroupTeachers(url).subscribe(
      (teachers: any) => {
        // TODO Teachers
        this.teachers = teachers;
      },
      error => this.errorHandlingService.check(error.status));
  }
  public getGroupBudgetOwner(url: string) {
    this.groupInfoService.getGroupBudgetOwner(url).subscribe(
      (budgetOwner: any) => {
        // TODO BudgetOwner
        this.selectedBudgetOwner = budgetOwner;
      },
      error => this.errorHandlingService.check(error.status));
  }
}
