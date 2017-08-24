import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Location } from '../../../common/models/location';

import { usersService } from './users.service';

@Component({
    selector: 'teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
    private hiddenListTeachers: boolean = true;
    private hiddenSelectedTeachers: boolean = true;
    private location: Location;
    private users: any;
    private teachers: string[] = ["Vasya", "Petya", "Egor"];
    private selectedTeacher: string;

    constructor (private usersService: usersService) {
    }

    ngOnInit () {
        this.usersService.getUsers()
            .subscribe(
                (data) => {    
                    this.users = data.json();
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                })
    }



    private addTeacher () {
    this.hiddenListTeachers = !this.hiddenListTeachers;

    }

    private showSelectedTeachers () {
        this.hiddenSelectedTeachers = false;
    }

}
