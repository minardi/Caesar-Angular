import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { User } from '../common/models/user';
import { ProfileService } from './profile.service';
import { ErrorHandlingService } from '../common/services/error-handling.service';


@Component({
    selector: 'caesar-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    currentUser: User;
    error: any;
    defaultPhoto = 'http://www.thirann.com/assets/img/newuser.jpeg';
    isHidden = true;

    constructor (
        private profileService: ProfileService,
        private router: Router,
        private errorHandlingService: ErrorHandlingService) {}

    ngOnInit(): void {
        this.profileService.getCurrentUser()
            .subscribe(
                (data: Response) => this.currentUser = data.json(),
                (error) => this.errorHandlingService.check(error.status)
            );
    }

    public toggleVisibility(): void {
        this.isHidden = !this.isHidden;
    }

    public logOut(): void {
        localStorage.removeItem('loggedUser');
        this.router.navigate(['/login']);
    }
}
