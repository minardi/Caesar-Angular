import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }          from './app.component';
import { CaesarPortalComponent } from './caesar-portal/caesar-portal.component';
import { GroupAreaComponent } from './group-area/group-area.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupStudentsComponent } from './group-students/group-students.component';
import { GroupScheduleComponent } from './group-schedule/group-schedule.component';
import { GroupNotificationsComponent } from './group-notifications/group-notifications.component';

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
