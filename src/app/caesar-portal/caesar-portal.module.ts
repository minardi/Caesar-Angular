import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';
import { GroupAreaModule } from './group-area/group-area.module';
import { ProfileModule } from './profile/profile.module';
import { GroupListModule } from './group-list/group-list.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    GroupListModule,
    GroupAreaModule,
    HttpModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent
  ]
})
export class CaesarPortalModule { }
