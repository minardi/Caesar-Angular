import { Component, OnInit } from '@angular/core';
import { Group} from "../common/models/group";
import { GroupService } from "../common/services/group.service";
import { Response} from '@angular/http';
import { GroupItemComponent } from './group-item/group-item.component';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupService]
})

export class GroupListComponent implements OnInit {
  groups: Group[];
  firstItem = 0;
  lastItem = 9;
  itemsPerPage = 10;
  groupsQuantity: number;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groups = [];

    this.groupService.getAll().subscribe((data: Response) => {
      this.groups = data.json();
      this.groupsQuantity = this.groups.length;
      this.onPageChange(1);
    });
  }

  onPageChange(page) {
    this.firstItem = this.itemsPerPage * page - this.itemsPerPage;
    this.lastItem = this.itemsPerPage * page - 1;
  }
}
