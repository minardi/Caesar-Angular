import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent,
    DeleteDialogComponent
  ],
  declarations: [GroupListComponent, GroupItemComponent, DeleteDialogComponent],
  entryComponents: [DeleteDialogComponent]
})
export class GroupListModule { }

