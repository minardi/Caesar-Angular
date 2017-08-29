import { Component, OnInit } from '@angular/core';
import { Group } from '../common/models/group';
import { GroupStatus } from '../common/models/group-status';
import { GroupService } from '../common/services/group.service';
import { Response } from '@angular/http';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})

export class GroupListComponent implements OnInit {
  groups: Group[];
  bsModalRef: BsModalRef;
  firstItem = 0;
  lastItem = 9;
  itemsPerPage = 10;
  currentPage = 1;
  groupsQuantity: number;
  myGroupsFilter = false;
  GroupProgressStatus: typeof GroupStatus = GroupStatus;
  groupStatus: GroupStatus = GroupStatus.Current;

  constructor(private groupService: GroupService, private modalService: BsModalService) { }

  ngOnInit() {
    this.showAllGroups();
  }

  private showAllGroups() {
    this.groupService.getAll().subscribe(
      (data: Group[]) => {
        this.groups = data;
        this.groupsQuantity = this.groups.length;
        this.onPageChange(1);
      },
      error => console.log(error));
  }

  private showUserGroups() {
    this.groupService.getUserGroups().subscribe(
      (data: Group[]) => {
        this.groups = data;
        this.groupsQuantity = this.groups.length;
        this.onPageChange(1);
      },
      error => console.log(error));
  }

  public showMyGroups() {
    this.myGroupsFilter = !this.myGroupsFilter;
    this.myGroupsFilter ? this.showUserGroups() : this.showAllGroups();
  }

  changeProgressStatus(status) {
    this.groupStatus = status;
  }

  public openDeleteDialog(event: Event, groupId: number, groupName: string) {
    event.preventDefault();

    this.bsModalRef = this.modalService.show(DeleteDialogComponent);
    this.bsModalRef.content.groupId = groupId;
    this.bsModalRef.content.groupName = groupName;
    this.bsModalRef.content.onGroupDeleted.subscribe((groupId) => this.deleteGroupItem(groupId));
  }

  public openCreateDialog(event: Event) {
    this.bsModalRef = this.modalService.show(CreateEditDialogComponent);
    this.bsModalRef.content.isEditMode = false;
    this.bsModalRef.content.groups = this.groups;
    this.bsModalRef.content.onGroupUpdated.subscribe(() => this.showUserGroups());
  }

  public openEditDialog(group: Group) {
    this.bsModalRef = this.modalService.show(CreateEditDialogComponent);
    this.bsModalRef.content.editingGroup = group;
    this.bsModalRef.content.onGroupUpdated.subscribe(() => this.showUserGroups());
  }

  private deleteGroupItem(groupId: number) {
    this.groups = this.groups.filter((currentGroup) => {
      return currentGroup.groupId !== groupId;
    });
  }

  onPageChange(page: number) {
    this.firstItem = this.itemsPerPage * page - this.itemsPerPage;
    this.lastItem = this.itemsPerPage * page - 1;
  }
}
