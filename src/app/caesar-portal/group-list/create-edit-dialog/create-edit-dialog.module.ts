import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule.forRoot()
  ],
  declarations: []
})
export class CreateEditDialogModule {}
