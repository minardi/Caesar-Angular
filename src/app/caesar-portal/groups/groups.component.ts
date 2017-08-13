import { Component, OnInit } from '@angular/core';
import { GroupItemComponent }   from './groupItem.component';
import { Group }   from './Group';
import { GroupService }   from './group.service';
import { Response} from '@angular/http';

@Component({
    selector: 'groups',
    template: `<div class="col-md-3">>
                    <div class="top-controls"></div>
                    <group-item class="col-md-6"  *ngFor="let group of groups" [groupItem]="group"></group-item>
                    <div class="bottom-controls"></div>
               </div>`,
    providers: [GroupService]

})

export class GroupsComponent implements OnInit {

    groups: Group[];

    constructor(private groupService: GroupService) {}

    ngOnInit(): void {
        this.groupService.getAll().subscribe((data: Response) => {
            this.groups = data.json();
            console.log(data.json())
        });
    }
}