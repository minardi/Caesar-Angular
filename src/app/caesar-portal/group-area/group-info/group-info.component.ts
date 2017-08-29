import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GroupService } from "../../common/services/group.service";
import { Group } from '../../common/models/group';
import { User } from '../../common/models/user';

@Component({
  selector: 'group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})


export class GroupInfoComponent implements OnInit, OnDestroy {
    group: Group = new Group();
    groupCurrent: Group;
    teachers: User[];
    private subscription: Subscription;

    constructor (private groupService: GroupService) {
    }

    ngOnInit () {
        this.subscription = this.groupService.groupCurrent
            .subscribe(
                (group: Group) => {
                    this.groupCurrent = group;
                }
            );
                    // console.log(this.group);
    }

    private getGroup (groupId: number) {
        this.groupService.get(groupId).subscribe(
            (group: Group) => {
                this.group = group;
                // console.log(this.group);
                // this.getLocation(this.group._links['location'].href);
                // this.getStage(this.group._links['status'].href);
                // teachersUrl = groupObj._links.teachers.href
            },
            error => console.log(error)
        );
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
