import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ErrorHandlingService } from '../common/services/error-handling.service';
import { GroupService } from './../common/services/group.service';
import { LocationService } from './../common/services/location.service';
import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { ProfileModule } from '../profile/profile.module';

import { GroupInfoService } from '../common/services/group-info.service';

import { MenuModule } from '../menu/menu.module';

@NgModule({
    imports: [
        CommonModule,
        GroupListModule,
        GroupAreaModule,
        ProfileModule,
        HttpModule,
        MenuModule
    ],
    exports: [
        CaesarHomeComponent
    ],
    providers: [
        GroupService,
        ErrorHandlingService,
        GroupInfoService,
        LocationService,
        ErrorHandlingService
    ],
    declarations: [
        CaesarHomeComponent
    ]
})
export class CaesarHomeModule { }

