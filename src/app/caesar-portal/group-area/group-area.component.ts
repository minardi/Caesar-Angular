import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupService } from "../common/services/group.service";
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../common/models/group';
import { Location } from '../common/models/location';
import { ErrorHandlingService } from '../common/services/error-handling.service';

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
                 private groupService: GroupService,
                 private errorHandlingService: ErrorHandlingService) {
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
                this.changeIdCurrent(groupId);
                this.getLocation(this.group.links['location'].href);
                this.getStage(this.group.links['status'].href);
            },
            error => this.errorHandlingService.check(error.status)
        );
    }

    changeIdCurrent(id: number): void {
        this.groupService.changeIdCurrent(id);
    }

    private getLocation (locationUrl: string) {
        this.groupService.getLocation(locationUrl).subscribe(
            (location: Location) => {
                this.location = location;
            },
            error => this.errorHandlingService.check(error.status)
        );
    }

    private getStage (stageUrl: string) {
        this.groupService.getParametr(stageUrl).subscribe(
            (stage: string[]) => {
                this.stage = stage;
            },
            error => this.errorHandlingService.check(error.status)
        );
    }

    ngOnDestroy () {
        this.paramsSubscription.unsubscribe();
    }
}