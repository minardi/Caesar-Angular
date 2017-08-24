import {Component, OnChanges, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {UpdateGroupService} from '../../common/services/update-group.service';
import {Location} from '../../common/models/location';

@Component({
  selector: 'caesar-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit, OnChanges {

  locations: Location[];

  constructor(public bsModalRef: BsModalRef, private updateGroupService: UpdateGroupService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.showAllLocations();
  }

  private showAllLocations() {
    this.updateGroupService.getLocations().subscribe(
      (data: Location[]) => {
        this.locations = data;
      },
      error => console.log(error));
  }
}
