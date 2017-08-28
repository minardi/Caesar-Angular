import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OnChanges } from '@angular/core';

import { ProfileService } from '../../../profile/profile.service';
import { User } from '../../../common/models/user';
import { USERS } from './mock-users';

@Component({
    selector: 'teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
    private users: User[];
    public teachers: User[];

    public selectedTeachers: User[] = [];
    private quantityOfTeachers: number;
    private defaultTeacher: User;

    public toggleDropdownAndButton: boolean = true;
    public hiddenSelectedTeachers: boolean = true;
    public hiddenButton: boolean = false;

    public IdSelectedTeachers: {id: number}[];

    @Output() onTeachersChanged = new EventEmitter<{id: number}[]>();
    
    constructor (private profileService: ProfileService) {
    }

    ngOnInit () {
        this.users = USERS;
        this.profileService.getCurrentUser()
            .subscribe(
                (data) => {
                    const currentUser = data.json();    
                    this.filterTeachers(currentUser);
                },
                (error) => {}
            );
    }

    private filterTeachers(currentUser: User): void {
        const location = currentUser.location.name;

        if (currentUser.role.name !== 'admin') {
            this.teachers = this.users.filter((user) => {
                return user.location.name === location && user.role.name !== 'admin';
            });
        } else {
            this.teachers = this.users.filter((user) => {
                return user.role.name !== 'admin';
            });
        }

        this.countTeachers();
        this.findCoordinator();
    }

    private countTeachers() {
        this.quantityOfTeachers = this.teachers.length;
    }

    private findCoordinator(): void {
        this.defaultTeacher = this.teachers.find((user) => {
            return user.role.name === 'coordinator';
        });
    }

     public changeDefaultTeacher(teacher: User) {
        this.defaultTeacher = teacher;
    }

    public addTeacher(): void {
        this.toggleListAndButton();
    }

    public cancelTeacher(): void {
        this.toggleListAndButton();
    }
 
    private toggleListAndButton(): void {
        this.toggleDropdownAndButton = !this.toggleDropdownAndButton;
    }

    public saveSelectedTeacher(): void {
        this.selectedTeachers.push(this.defaultTeacher);

        this.toggleDropdownAndButton = !this.toggleDropdownAndButton;
        this.hiddenSelectedTeachers = false;

        this.deleteTeacherFromProposed(this.defaultTeacher);
        this.checkQuantity();
        this.addNewDefaultTeacher();
        this.createIdTeachersList();

        this.sendTeachersId(this.IdSelectedTeachers);    
    }

    public sendTeachersId(id) {
        this.onTeachersChanged.emit(id);
    }

    private createIdTeachersList() {
        this.IdSelectedTeachers = [];

        this.selectedTeachers.forEach((teacher) => {
            this.IdSelectedTeachers.push({id: teacher.id});
        });
    }

    private addNewDefaultTeacher(deletedTeacher?: User) {
        if (this.defaultTeacher) {
            this.defaultTeacher = this.teachers.find((user) => {
                return user.lastName !== this.defaultTeacher.lastName;
            });
        } else {
            this.defaultTeacher = deletedTeacher;
        }
    }

    private checkQuantity() {
        if (!this.selectedTeachers.length) {
            this.hiddenSelectedTeachers = true;
        } 

        this.hiddenButton = (this.selectedTeachers.length === this.quantityOfTeachers)?
            true : false;
    }

    private deleteTeacherFromProposed(deletedTeacher: User) {
        const indexOfTeacher = this.teachers.indexOf(deletedTeacher);

        this.teachers.splice(indexOfTeacher, 1);
    }

    public deleteTeacherFromSelected(deletedTeacher: User): void {
        const indexOfTeacher = this.selectedTeachers.indexOf(deletedTeacher);

        this.selectedTeachers.splice(indexOfTeacher, 1);

        this.teachers.push(deletedTeacher);

        this.checkQuantity();
        this.addNewDefaultTeacher(deletedTeacher);
        this.createIdTeachersList();
    }
}
