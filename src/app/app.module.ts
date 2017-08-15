import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent }       from './app.component';
import { CaesarPortalModule } from './caesar-portal/caesar-portal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CaesarPortalModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }