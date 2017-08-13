import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupAreaComponent } from './group-area.component';
import { GroupStudentsComponent } from './group-students/group-students.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupNotificationsComponent } from './group-notifications/group-notifications.component';
import { GroupScheduleComponent } from './group-schedule/group-schedule.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GroupAreaComponent,
    GroupStudentsComponent,
    GroupInfoComponent,
    GroupNotificationsComponent,
    GroupScheduleComponent
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