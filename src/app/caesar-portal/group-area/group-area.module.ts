import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupAreaComponent } from './group-area.component';
import { GroupStudentsComponent } from './group-students/group-students.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupNotificationsComponent } from './group-notifications/group-notifications.component';
import { GroupScheduleComponent } from './group-schedule/group-schedule.component';

import { RouterModule, Routes } from '@angular/router';

const groupAreaRoutes: Routes = [
    { path: '', component: GroupInfoComponent },
    { path: 'info', component: GroupInfoComponent },
    { path: 'students', component: GroupStudentsComponent },
    { path: 'schedule', component: GroupScheduleComponent },
    { path: 'notifications', component: GroupNotificationsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(groupAreaRoutes)
    ],
    exports: [
        GroupAreaComponent,
        GroupStudentsComponent,
        GroupInfoComponent,
        GroupNotificationsComponent,
        GroupScheduleComponent,
        RouterModule
    ],
    declarations: [
        GroupAreaComponent,
        GroupStudentsComponent,
        GroupInfoComponent,
        GroupNotificationsComponent,
        GroupScheduleComponent
    ]
})

export class GroupAreaModule { }