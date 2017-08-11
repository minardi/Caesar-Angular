import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ProfileComponent
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }
