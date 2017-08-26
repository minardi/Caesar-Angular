import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'caesar-home',
    templateUrl: './caesar-home.component.html',
    styleUrls: ['./caesar-home.component.scss']
})
export class CaesarHomeComponent implements OnInit {
    distanceX = 5;

    @ViewChild(MenuComponent)
    private menuComponent: MenuComponent;

    constructor (
        private router: Router,
        private http: Http) {
    }

    ngOnInit () {
        this.checkEndingSession();
    }

    checkEndingSession () {
        if (localStorage.getItem('loggedUser')) {
            this.http.get(environment.serviceApi.groupsUrl)
                .subscribe(data => console.log('ok'),
                    error => {
                        if (error.status === 401) {
                            this.router.navigate(['/log']);
                        }
                    }
                );
        }
    }

    private showMenu($event) {
        if ($event.clientX < this.distanceX) {
            this.menuComponent.isHidden = false;
        }
    }
}

