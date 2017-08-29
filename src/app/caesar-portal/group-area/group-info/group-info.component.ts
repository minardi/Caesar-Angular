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
    groupCurrent: Group = new Group();
    teachers: User[];
    subscription: Subscription;

    constructor (private groupService: GroupService) {
        this.subscription = this.groupService.getGroupCurrent().
            subscribe(group => { 
                this.group = group;
                this.getTeachers(this.group._links['teachers'].href);
            });
    }

    ngOnInit () {
    }

    private getTeachers (teachersUrl: string) {
        this.groupService.getParametr(teachersUrl).subscribe(
            (data: string[]) => {
                this.teachers = data['_embedded'].users;
            },
            error => console.log(error)
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
