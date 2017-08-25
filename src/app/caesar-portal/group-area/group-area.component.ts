import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupService } from "../common/services/group.service";
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'group-area',
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit, OnDestroy {
    activeTab;
    group: {id: number, name: string} = {id: null, name: null};
    paramsSubscription: Subscription;

    constructor (private router: Router, private route: ActivatedRoute) {
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.activeTab = e.url;
            }
        });
    }

    ngOnInit () {
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.group.id = params['id'];
                    this.group.name = params['name'];
                }
            );
    }

    ngOnDestroy () {
        this.paramsSubscription.unsubscribe();
    }
}

  // constructor(private route: ActivatedRoute) { }
