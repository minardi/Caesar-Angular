import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
    imports: [
        CommonModule,
        GroupListModule,
        GroupAreaModule,
        ProfileModule,
        HttpModule
  ],
    exports: [
        CaesarHomeComponent
  ],
    declarations: [
        CaesarHomeComponent
    ]
})
export class CaesarHomeModule { }
