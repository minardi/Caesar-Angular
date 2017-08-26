import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { GroupService } from './../common/services/group.service';
import { LocationService } from './../common/services/location.service';
import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { ProfileModule } from '../profile/profile.module';
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
    providers: [GroupService, LocationService],
    declarations: [
        CaesarHomeComponent
    ]
})
export class CaesarHomeModule { }

