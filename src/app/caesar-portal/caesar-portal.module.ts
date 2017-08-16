import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarPortalComponent } from './caesar-portal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent  
  ]
})
export class CaesarPortalModule { }