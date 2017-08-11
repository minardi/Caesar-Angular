import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';
import { GroupAreaModule } from './group-area/group-area.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    GroupAreaModule,
    ProfileModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent
  ]
})
export class CaesarPortalModule { }