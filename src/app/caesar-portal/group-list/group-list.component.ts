import { Component, OnInit } from '@angular/core';
import { Group } from '../common/models/group';
import { GroupService } from '../common/services/group.service';
import { Response } from '@angular/http';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})

export class GroupListComponent implements OnInit {
  groups: Group[];
  bsModalRef: BsModalRef;

  constructor(private groupService: GroupService, private modalService: BsModalService) { }

  ngOnInit() {
    this.groupService.getAll().subscribe(
      data => this.groups = data.json(),
      error => console.log(error));
  }

  public openDeleteDialog(event: Event, groupId: number, groupName: string) {
    event.preventDefault();

    this.bsModalRef = this.modalService.show(DeleteDialogComponent);
    this.bsModalRef.content.groupId = groupId;
    this.bsModalRef.content.groupName = groupName;
    this.bsModalRef.content.onGroupDeleted.subscribe((groupId) => this.deleteGroupItem(groupId));
  }

  private deleteGroupItem(groupId: number) {
    this.groups = this.groups.filter((currentGroup) => {
      return currentGroup.groupId !== groupId;
    });
  }
}


