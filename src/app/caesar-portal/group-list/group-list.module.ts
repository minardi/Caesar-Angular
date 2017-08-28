import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { HttpModule } from '@angular/http';
import { LimitToPipe } from '../../caesar-portal/common/pipes/limit-to.pipe';
import { MatchesProgressPipe } from '../../caesar-portal/common/pipes/mathces-progress.pipe';
import { PagerComponent } from '../common/components/pager/pager.component';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import { BsDropdownModule, DatepickerModule } from 'ngx-bootstrap';

import { TeacherListComponent } from './create-edit-dialog/teacher-list/teacher-list.component';
import { ExpertListComponent } from './create-edit-dialog/expert-list/expert-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent,
    DeleteDialogComponent
  ],
  providers: [
    DatePipe
    ],
  declarations: [GroupListComponent, GroupItemComponent, PagerComponent, LimitToPipe, MatchesProgressPipe, DeleteDialogComponent, CreateEditDialogComponent, TeacherListComponent, ExpertListComponent],

  entryComponents: [DeleteDialogComponent, CreateEditDialogComponent]
})
export class GroupListModule { }

