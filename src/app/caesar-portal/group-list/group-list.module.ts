import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { HttpModule } from '@angular/http';
import { LimitToPipe } from '../../caesar-portal/common/pipes/limit-to.pipe';
import { MatchesProgressPipe } from '../../caesar-portal/common/pipes/mathces-progress.pipe';
import { PagerComponent } from '../common/components/pager/pager.component';

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
  declarations: [GroupListComponent, GroupItemComponent, PagerComponent, LimitToPipe, MatchesProgressPipe, DeleteDialogComponent],
  entryComponents: [DeleteDialogComponent]
})
export class GroupListModule { }

