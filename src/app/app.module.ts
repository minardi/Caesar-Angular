import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaesarPortalModule } from './caesar-portal/caesar-portal.module';


@NgModule({
  	declarations: [
    	AppComponent,
  ],
    imports: [
    	BrowserModule,
    	CaesarPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }