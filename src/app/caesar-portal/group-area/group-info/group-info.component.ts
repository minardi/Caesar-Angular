import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GroupService } from '../../common/services/group.service';
import { Group } from '../../common/models/group';
import { User } from '../../common/models/user';
import { ErrorHandlingService } from '../../common/services/error-handling.service';

@Component({
  selector: 'group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})


export class GroupInfoComponent implements OnInit, OnDestroy {
    group: Group = new Group();
    groupCurrent: Group[];
    teachers: User[];
    subscription: Subscription;
    groupId: number;

    constructor (private groupService: GroupService,
                 private errorHandlingService: ErrorHandlingService) {
        this.subscription = this.groupService.getIdCurrent().
            subscribe(id => {
                this.getGroup(id);
            });
    }

    ngOnInit () {
    }

    private getGroup (id: number) {
        this.groupService.get(id).subscribe(
            (group: Group) => {
                this.group = group;
                this.getTeachers(this.group.links['teachers'].href);
            },
            error => this.errorHandlingService.check(error.status)
        );
    }

    private getTeachers (teachersUrl: string) {
        this.groupService.getParametr(teachersUrl).subscribe(
            (data: string[]) => {
                this.teachers = data['_embedded'].users;
            },
            error => this.errorHandlingService.check(error.status)
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
