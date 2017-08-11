import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';
import { GroupAreaModule } from './group-area/group-area.module';

@NgModule({
  imports: [
    CommonModule,
    GroupAreaModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent
  ]
})
export class CaesarPortalModule { }