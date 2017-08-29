import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { HttpModule } from '@angular/http';
import { LimitToPipe } from '../../caesar-portal/common/pipes/limit-to.pipe';
import { PagerComponent } from '../common/components/pager/pager.component';

import { AppRoutingModule } from '../caesar-portal.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent,
    DeleteDialogComponent
  ],
  declarations: [GroupListComponent, GroupItemComponent, PagerComponent, LimitToPipe, DeleteDialogComponent],
  entryComponents: [DeleteDialogComponent]
})
export class GroupListModule { }

