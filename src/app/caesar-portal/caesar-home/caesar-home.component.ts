import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { MenuComponent } from '../menu/menu.component';
import { ErrorHandlingService } from '../common/services/error-handling.service';

@Component({
    selector: 'caesar-home',
    templateUrl: './caesar-home.component.html',
    styleUrls: ['./caesar-home.component.scss']
})

export class CaesarHomeComponent implements OnInit {
    distanceX = 5;

    @ViewChild(MenuComponent)
    private menuComponent: MenuComponent;
    constructor(
        private errorHandlingService: ErrorHandlingService,
        private http: Http) {
    }

    ngOnInit() {
        this.checkEndingSession();
    }

    public checkEndingSession() {
        if (localStorage.getItem('loggedUser')) {
            this.http.get(environment.serviceApi.groupsUrl)
                .subscribe(data => {},
                    error => {
                        this.errorHandlingService.check(error.status);
                    }
                );
        }
    }

    public showMenu($event) {
        if ($event.clientX < this.distanceX) {
            this.menuComponent.isHidden = false;
        }
    }
}
