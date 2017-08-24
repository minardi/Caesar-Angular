import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { HttpModule } from '@angular/http';
import { LimitToPipe } from '../../caesar-portal/common/pipes/limit-to.pipe';
import { MatchesProgressPipe } from '../../caesar-portal/common/pipes/mathces-progress.pipe';
import { PagerComponent } from '../common/components/pager/pager.component';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';

import { TeacherListComponent } from './create-edit-dialog/teacher-list/teacher-list.component';

import { usersService } from './create-edit-dialog/teacher-list/users.service';


import {BsDropdownModule} from 'ngx-bootstrap'; 

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  exports: [
    GroupListComponent,
    GroupItemComponent,
    DeleteDialogComponent
  ],
  providers: [
    usersService
    ],
  declarations: [GroupListComponent, GroupItemComponent, PagerComponent, LimitToPipe, MatchesProgressPipe, DeleteDialogComponent, CreateEditDialogComponent, TeacherListComponent],
  entryComponents: [DeleteDialogComponent, CreateEditDialogComponent]
})
export class GroupListModule { }

