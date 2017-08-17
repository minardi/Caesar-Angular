import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { LimitToPipe } from '../../caesar-portal/common/pipes/limit-to.pipe';
import { PagerComponent } from '../common/components/pager/pager.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent
  ],
  declarations: [GroupListComponent, GroupItemComponent, PagerComponent, LimitToPipe]
})
export class GroupListModule {}
