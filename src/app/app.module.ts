import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }          from './app.component';
import { CaesarPortalComponent } from './caesar-portal/caesar-portal.component';
import { GroupAreaComponent } from './caesar-portal/group-area/group-area.component';
import { GroupInfoComponent } from './caesar-portal/group-area/group-info/group-info.component';
import { GroupStudentsComponent } from './caesar-portal/group-area/group-students/group-students.component';
import { GroupScheduleComponent } from './caesar-portal/group-area/group-schedule/group-schedule.component';
import { GroupNotificationsComponent } from './caesar-portal/group-area/group-notifications/group-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarPortalComponent,
    GroupAreaComponent,
    GroupInfoComponent,
    GroupStudentsComponent,
    GroupScheduleComponent,
    GroupNotificationsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
