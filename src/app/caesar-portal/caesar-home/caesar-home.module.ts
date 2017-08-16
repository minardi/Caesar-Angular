import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    GroupListModule,
    GroupAreaModule,
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

