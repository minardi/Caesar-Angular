import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaesarHomeModule } from './caesar-portal/caesar-home/caesar-home.module';


@NgModule({
  	declarations: [
    	AppComponent,
  ],
    imports: [
    	BrowserModule,
    	CaesarHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }