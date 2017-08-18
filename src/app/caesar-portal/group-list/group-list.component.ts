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

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getAll().subscribe((data: Response) => {
      this.groups = data.json();
    });
  }

  onGroupItem(item: string) {
    console.log(item);
  }
}

