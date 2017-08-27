import { Component, OnInit } from '@angular/core';
import { GroupAreaComponent } from '../group-area.component';
import { GroupService } from "../../common/services/group.service";
import { Group } from '../../common/models/group';

@Component({
  selector: 'group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})


export class GroupInfoComponent implements OnInit {
  group: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
      this.group = this.groupService.getGroup();
      console.log(this.group);
      console.log(this.group.teachers);
      console.log(this.group.experts);
  }
}
