import { Component, OnInit } from '@angular/core';

import { User }           from './user';
import { ProfileService } from './profile.service';


@Component({
    selector: 'caesar-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
    currentUser: User;
    defaultPhoto: string = "http://www.thirann.com/assets/img/newuser.jpeg";
    popupVisibility: boolean = true;
    photoVisibility: boolean = false;

    constructor(private profileService: ProfileService) { }

    getCurrentUser(): void {
        this.profileService.getCurrentUser().then(currentUser => this.currentUser = currentUser);
    }

    ngOnInit(): void {
        this.getCurrentUser();
    }

    toggle(): void {
        this.popupVisibility = !this.popupVisibility;
        this.photoVisibility = !this.photoVisibility;
    }

    getUserPhoto(): string {
        return this.currentUser.image;
    }
}
