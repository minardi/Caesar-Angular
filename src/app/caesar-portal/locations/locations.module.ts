import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsComponent } from './locations.component';
import { LocationsService } from './locations.service';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LocationsComponent
    ],
    declarations: [
        LocationsComponent
    ],
    providers: [
        LocationsService
    ]
})
export class LocationsModule { }
