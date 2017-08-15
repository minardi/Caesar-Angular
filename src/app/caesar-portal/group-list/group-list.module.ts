import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent
  ],
  declarations: [GroupListComponent, GroupItemComponent]
})
export class GroupListModule {}

