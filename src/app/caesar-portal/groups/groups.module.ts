import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsComponent }   from './groups.component';
import { GroupItemComponent }   from './groupItem.component';

@NgModule({

    imports: [
        CommonModule
    ],

    exports: [
    GroupsComponent,
    GroupItemComponent 
  ],
  declarations: [
    GroupsComponent,
    GroupItemComponent
  ]
    
})
export class GroupsModule { 

}


