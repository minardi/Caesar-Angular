import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';
import { GroupAreaModule } from './group-area/group-area.module';
import { GroupListComponent } from './group-list/group-list.component';

@NgModule({
  imports: [
    CommonModule,
    GroupAreaModule,
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent,
    GroupListComponent
  ]
})
export class CaesarPortalModule { }