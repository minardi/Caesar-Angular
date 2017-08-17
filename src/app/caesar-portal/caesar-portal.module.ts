import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';
import { GroupAreaModule } from './group-area/group-area.module';
import { GroupListModule } from './group-list/group-list.module';
import { HttpModule } from '@angular/http';
import { GroupService } from './common/services/group.service';

@NgModule({
  imports: [
    CommonModule,
    GroupListModule,
    GroupAreaModule,
    HttpModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  providers: [GroupService],
  declarations: [
    CaesarPortalComponent
  ]
})

export class CaesarPortalModule {
 }