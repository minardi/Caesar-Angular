import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaesarHomeComponent } from './caesar-home/caesar-home.component';
import { CaesarLoginComponent } from './caesar-login/caesar-login.component';
import { LoginGuard } from './caesar-login/guard/caesar-login.guard';

import { GroupAreaComponent } from './group-area/group-area.component';
import { GroupStudentsComponent } from './group-area/group-students/group-students.component';
import { GroupInfoComponent } from './group-area/group-info/group-info.component';
import { GroupNotificationsComponent } from './group-area/group-notifications/group-notifications.component';
import { GroupScheduleComponent } from './group-area/group-schedule/group-schedule.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    { path: '', canActivate: [LoginGuard], component: CaesarHomeComponent },
    { path: 'about', canActivate: [LoginGuard], component: AboutComponent },
    { path: ':location/groups', component: CaesarHomeComponent, canActivate: [LoginGuard] },
    /*if path '/login' - after reloading the page error: 'This application has
    no explicit mapping for /error, so you are seeing this as a fallback'*/
    {
        path: 'group/:id/:name', canActivate: [LoginGuard], component: CaesarHomeComponent,
        children: [
            { path: '', component: GroupInfoComponent },
            { path: 'info', component: GroupInfoComponent },
            { path: 'students', component: GroupStudentsComponent },
            { path: 'schedule', component: GroupScheduleComponent },
            { path: 'notifications', component: GroupNotificationsComponent },
        ]
    },
    { path: 'log', component: CaesarLoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}