import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { CaesarPortalComponent } from './caesar-portal.component';

@NgModule({
  declarations: [
    CaesarPortalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CaesarPortalComponent]
})
export class CaesarPortalModule { }
