import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupService } from "../common/services/group.service";
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../common/models/group';
import { Location } from '../common/models/location';

@Component({
    selector: 'group-area',
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit, OnDestroy {
    activeTab;
    paramsSubscription: Subscription;
    group: Group = new Group();
    location: Location = new Location();
    stage: string[];

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
        this.groupService.get(groupId).subscribe(
            (group: Group) => {
                this.group = group;
                this.groupService.setGroupCurrent(this.group);
                this.getLocation(this.group._links['location'].href);
                this.getStage(this.group._links['status'].href);
            },
            error => console.log(error)
        );
    }

    private getLocation (locationUrl: string) {
        this.groupService.getLocation(locationUrl).subscribe(
            (location: Location) => {
                this.location = location;
            },
            error => console.log(error)
        );
    }

    private getStage (stageUrl: string) {
        this.groupService.getStage(stageUrl).subscribe(
            (stage: string[]) => {
                this.stage = stage;
            },
            error => console.log(error)
        );
    }

    ngOnDestroy () {
        this.paramsSubscription.unsubscribe();
    }
}