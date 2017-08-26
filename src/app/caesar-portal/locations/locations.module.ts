import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsComponent } from './locations.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LocationsComponent
    ],
    declarations: [
        LocationsComponent
    ]
})
export class LocationsModule { }
