import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


import { usersService } from './users.service';
import { USERS } from './mock-users';
import { UsersInfo } from './model-users';


@Component({
    selector: 'teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
    private toggleDropdownAndButton: boolean = true;
    private hiddenSelectedTeachers: boolean = true;
    private hiddenButton: boolean = false;
    private users: UsersInfo[];
    private teachers: UsersInfo[];
    private location: string;
    private selectedTeachers: string[] = [];
    private listRemovedTeachers: UsersInfo[] = [];
    private quantityOfTeachers: number;

    constructor (private usersService: usersService) {
    }

    ngOnInit () {
        this.users = USERS;
        this.usersService.getUser()
            .subscribe(
                (data) => {    
                    this.location = data.json().location.name;
                    this.filterTeachers(this.location);

                },
                (error) => { })
    }

    private filterTeachers(location: string): void {
        this.teachers = this.users.filter((user) => {
            return user.location === location && user.role !== 'admin';
        });

        this.quantityOfTeachers = this.teachers.length;
    }

    private toggleListAndButton(): void {
        this.toggleDropdownAndButton = !this.toggleDropdownAndButton;
    }

    private saveSelectedTeacher(teacher: string): void {
        this.selectedTeachers.push(teacher);

        this.hiddenSelectedTeachers = false;
        this.toggleDropdownAndButton = !this.toggleDropdownAndButton;

        this.deleteTeacherFromList(teacher);

        this.checkQuantity();
    }

    private checkQuantity() {
        if (this.selectedTeachers.length === this.quantityOfTeachers) {
            this.hiddenButton = true;
        } else {
            this.hiddenButton = false;
        }
    }

    private deleteTeacherFromList(teacher: string) {
        const teacherName = teacher.split(' ')[0];

        const deletedTeacher = this.teachers.find((user) => {
            return user.firstName === teacherName;
        })

        this.listRemovedTeachers.push(deletedTeacher);

        const indexOfList = this.teachers.indexOf(deletedTeacher);

        this.teachers.splice(indexOfList, 1);

        /*this.teachers = this.teachers.filter((user) => {
            return user.firstName !== teacherName;
        });*/
    }


    private deleteTeacher(removedTeacher: string): void {
        const teacherName = removedTeacher.split(' ')[0];

        /*this.selectedTeachers = this.selectedTeachers.filter((teacher) => {
            return teacher !== removedTeacher;
        });*/

        const indexOfTeacher = this.selectedTeachers.indexOf(removedTeacher);

        this.selectedTeachers.splice(indexOfTeacher, 1);

        if (!this.selectedTeachers.length) {
            this.hiddenSelectedTeachers = true;
        }

        this.teachers.push(this.listRemovedTeachers.find((teacher) => {
            return teacher.firstName === teacherName;
        }));

        this.checkQuantity();
    }

}
