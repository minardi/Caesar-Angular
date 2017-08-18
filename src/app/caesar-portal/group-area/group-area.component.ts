import { Component, OnInit } from '@angular/core';
import { GroupService } from "../common/services/group.service";
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'group-area',
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit {
    activeTab;

    constructor (router: Router) {
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.activeTab = e.url;
            }
        });
    }

    ngOnInit () {
    }
}