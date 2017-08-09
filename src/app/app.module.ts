import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }          from './app.component';
import { CaesarPortalComponent } from './caesar-portal/caesar-portal.component';
import { GroupAreaComponent } from './group-area/group-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarPortalComponent,
    GroupAreaComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
