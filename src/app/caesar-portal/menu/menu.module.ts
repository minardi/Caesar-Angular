import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { LocationsModule } from '../locations/locations.module';

@NgModule({
    imports: [
        CommonModule,
        LocationsModule
    ],
    exports: [
        MenuComponent
    ],
    declarations: [
        MenuComponent
    ]
})
export class MenuModule { }
