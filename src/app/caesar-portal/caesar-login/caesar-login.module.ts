import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { CaesarLoginComponent } from './caesar-login.component';
import { LoginGuard } from './guard/caesar-login.guard';
import { CaesarLoginService } from './service/caesar-login.service';
 
@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule 
    ],
    exports: [ 
        CaesarLoginComponent
    ],
    declarations: [ 
        CaesarLoginComponent
    ],
    providers: [
        CaesarLoginService,
        LoginGuard
    ]
})
export class CaesarLoginModule { }
