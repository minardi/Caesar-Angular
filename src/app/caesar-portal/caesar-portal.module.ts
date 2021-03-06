import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { routing } from './caesar-portal.routing.module';

import { CaesarLoginModule } from './caesar-login/caesar-login.module';
import { CaesarHomeModule } from './caesar-home/caesar-home.module';
import { CaesarPortalComponent } from './caesar-portal.component';

@NgModule({
  imports: [
    CommonModule,
    CaesarHomeModule,
    routing,
    CaesarLoginModule
  ],
  exports: [
    CaesarPortalComponent
  ],
  declarations: [
    CaesarPortalComponent
  ]
})
export class CaesarPortalModule { }
