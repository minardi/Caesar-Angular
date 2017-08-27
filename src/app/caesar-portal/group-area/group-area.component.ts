import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupService } from "../common/services/group.service";
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../common/models/group';

@Component({
    selector: 'group-area',
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit, OnDestroy {
    activeTab;
    group: Group = new Group();
    paramsSubscription: Subscription;

    constructor (private router: Router, 
                 private route: ActivatedRoute, 
                 private groupService: GroupService) {
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.activeTab = e.url.substr(e.url.lastIndexOf('/'));
            }
        });
    }

    ngOnInit () {
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.getGroup(params['id']);
                }
            );
    }

    private getGroup (groupId: number) {
        this.groupService.get(groupId).then(
            (group: Group) => {
                this.group = group;
                this.groupService.setGroup(group);
            },
            error => console.log(error)
        );
    }

    ngOnDestroy () {
        this.paramsSubscription.unsubscribe();
    }
}