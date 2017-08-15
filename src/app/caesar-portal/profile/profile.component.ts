import { Component, OnInit } from '@angular/core';
import { Response }          from '@angular/http';

import { User }           from '../common/models/user';
import { ProfileService } from './profile.service';


@Component({
    selector: 'caesar-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
    currentUser: User;
    defaultPhoto = 'http://www.thirann.com/assets/img/newuser.jpeg';
    popupVisibility = true;
    photoVisibility = false;

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getCurrentUser().subscribe((data: Response) => {
            this.currentUser = data.json();
        });
    }

    toggle(): void {
        this.popupVisibility = !this.popupVisibility;
        this.photoVisibility = !this.photoVisibility;
    }
}
