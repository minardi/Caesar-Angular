import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }          from './app.component';
import { CaesarPortalComponent } from './caesar-portal/caesar-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarPortalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
