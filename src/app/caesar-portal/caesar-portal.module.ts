import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './caesar-portal.routing.module';

import { CaesarLoginModule } from './caesar-login/caesar-login.module';
import { CaesarHomeModule } from './caesar-home/caesar-home.module';
import { CaesarPortalComponent } from './caesar-portal.component';

@NgModule({
  imports: [
    CommonModule,
    CaesarHomeModule,
    AppRoutingModule,
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
