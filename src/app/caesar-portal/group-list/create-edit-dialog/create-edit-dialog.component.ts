import { Component, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UpdateGroupService } from '../../common/services/update-group.service';
import { Location } from '../../common/models/location';
import { ProfileService } from '../../profile/profile.service';
import { User } from '../../common/models/user';
import { Response } from '@angular/http';
import { Direction } from '../../common/models/direction';

@Component({
  selector: 'caesar-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit, OnChanges {
  allowedRole = 4;
  currentUser: User;
  locations: Location[];
  directions: Direction[];
  selectedLocation: any;
  selectedDirection: any;
  error: any;

  constructor(public bsModalRef: BsModalRef, private profileService: ProfileService,  private updateGroupService: UpdateGroupService) { }

  ngOnInit() {
    this.getCurrentUserInfo();
    this.showAllDirections();
  }

  ngOnChanges() {
  }

  private getCurrentUserInfo(): void {
    this.profileService.getCurrentUser()
      .subscribe(
        (data: Response) => {
          this.currentUser = data.json();
          this.selectedLocation = this.currentUser.location;
          this.showAllLocations();
        },
        (error) => {
          this.error = error;
          console.error(error);
        }
      );
  }

  private showAllLocations() {
    this.updateGroupService.getLocations().subscribe(
      (data: Location[]) => {
        this.locations = data;
      },
      error => console.log(error));
  }

  private showAllDirections() {
    this.updateGroupService.getDirections().subscribe(
      (data: Direction[]) => {
        this.directions = data;
        this.selectedDirection = this.directions[0];
      },
      error => console.log(error));
  }

  public changeSelectedLocation(location) {
    this.selectedLocation = location;
  }

  public changeSelectedDirection(direction) {
    this.selectedDirection = direction;
  }

  public updateGroup() {

  }
}
