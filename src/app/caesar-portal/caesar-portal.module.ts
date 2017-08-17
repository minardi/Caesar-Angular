import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaesarHomeModule } from './caesar-home/caesar-home.module';
import { CaesarPortalComponent } from './caesar-portal.component';

@NgModule({
  imports: [
    CaesarHomeModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent
  ]
})
export class CaesarPortalModule { }
