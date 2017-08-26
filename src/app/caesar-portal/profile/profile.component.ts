import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { User } from '../common/models/user';
import { ProfileService } from './profile.service';


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

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getCurrentUser()
            .subscribe(
                (data: Response) => this.currentUser = data.json(),
                (error) => {
                    this.error = error;
                    console.error(error);
                }
            );
    }

    private toggleVisibility(): void {
        this.isHidden = !this.isHidden;
    }
}
