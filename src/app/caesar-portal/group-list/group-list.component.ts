import { Component, OnInit } from '@angular/core';
import { Group } from '../common/models/group';
import { GroupStatus } from '../common/models/group-status';
import { Location } from '../common/models/location';
import { GroupService } from '../common/services/group.service';
import { LocationService } from '../common/services/location.service';
import { Response } from '@angular/http';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})

export class GroupListComponent implements OnInit {
  groups: Group[];
  filteredGroups: Group[];
  bsModalRef: BsModalRef;
  firstItem = 0;
  lastItem = 9;
  itemsPerPage = 10;
  currentPage = 1;
  myGroupsFilter: boolean = false;
  GroupProgressStatus: typeof GroupStatus = GroupStatus;
  groupStatus: GroupStatus = GroupStatus.Current;
  locations: string[] = [];
  subscription: Subscription;

  constructor(
    private groupService: GroupService,
    private modalService: BsModalService,
    private activateRoute: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params => {
      if (params['location']) {
        this.locations = params['location'].split('+');
      }

      this.locations.length > 0
        ? this.getGroupsByLocation(this.locations)
        : this.getCurrentLocationGroups();
    });
  }

  private getCurrentLocationGroups() {
    this.groupService.getCurrentLocationGroups().subscribe(
      (data: Group[]) => {
        this.groups = data;
        this.onPageChange(1);
      },
      error => console.log(error));
  }

  private getGroupsByLocation(locations: string[]) {
    //since rest api does not work with location names we need to find ids by names manually 
    let allLocations = this.locationService.getLocations();

    allLocations.mergeMap((data) => {
      let locationsIds = this.getLocationIdsByNames(this.locations, data);
      return this.groupService.getGroupsByLocations(locationsIds)
    }).subscribe(
      (data) => {
        this.groups = data;
        this.onPageChange(1);
      },
      error => console.log(error))
  }

  private getLocationIdsByNames(locationNames: string[], locations: Location[]): number[] {
    let result: number[] = [];

    locationNames.forEach((value) => {
      let obj = locations.find((location) => location.name.toLowerCase() === value.toLowerCase());
      if (obj) result.push(obj.id)
    })

    return result;
  }

  private showUserGroups() {
    this.groupService.getUserGroups().subscribe(
      (data: Group[]) => {
        this.groups = data;
        this.onPageChange(1);
      },
      error => console.log(error));
  }

  private showMyGroups() {
    this.myGroupsFilter = !this.myGroupsFilter;

    if (this.myGroupsFilter) {
      this.showUserGroups()
    }
    else {
      //if location exists render groups by location in url otherwise current location groups 
      this.locations.length > 0
        ? this.getGroupsByLocation(this.locations)
        : this.getCurrentLocationGroups();
    }
  }

  private changeProgressStatus(status) {
    this.groupStatus = status;
    this.onPageChange(1);
  }

  private openDeleteDialog(event: Event, groupId: number, groupName: string) {
    event.preventDefault();

    this.bsModalRef = this.modalService.show(DeleteDialogComponent, { class: 'delete-dialog' });
    this.bsModalRef.content.groupId = groupId;
    this.bsModalRef.content.groupName = groupName;
    this.bsModalRef.content.onGroupDeleted.subscribe((groupId) => this.deleteGroupItem(groupId));
  }

  private deleteGroupItem(groupId: number) {
    this.groups = this.groups.filter((currentGroup) => {
      return currentGroup.groupId !== groupId;
    });
    this.onPageChange(1);
  }

  onPageChange(page: number) {
    this.filteredGroups = this.groups.filter((item: Group) => item.status === this.groupStatus);
    this.firstItem = this.itemsPerPage * page - this.itemsPerPage;
    this.lastItem = this.itemsPerPage * page - 1;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
