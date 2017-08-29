import { Component, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Location } from '../common/models/location';
import { LocationService } from '../common/services/location.service';

@Component({
    selector: 'caesar-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
    selectedLocatins: string[] = [];
    locations: Location[];
    modalRef: BsModalRef;
    error: any;

    constructor(
        private modalService: BsModalService,
        private locationsService: LocationService,
        private router: Router ) {}

    @Output() onOpenModal = new EventEmitter();
    public openModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template, {class: 'modal-window'});
    }

    ngOnInit() {
        this.locationsService.getLocations()
              .subscribe(
                  data => this.locations = data,
                  (error) => {
                      this.error = error;
                      console.error(error);
                  }
              );
    }

    public closeModal(): void {
        this.modalRef.hide();
        this.selectedLocatins = [];
    }

    public confirmLocations(): void {
        const result = this.selectedLocatins.join('+');
        this.closeModal();
        this.router.navigateByUrl(`${result}/groups`);
    }

    public toggleLocation($event, location): void {
        const index = this.selectedLocatins.indexOf(location);

        if (index === -1) {
            this.selectedLocatins.push(location);
            $event.target.classList.toggle('selected');
        } else {
            this.selectedLocatins.splice(index, 1);
            $event.target.classList.toggle('selected');
        }
    }

    public addAndConfirmLocation(location) {
        this.selectedLocatins = [];
        this.selectedLocatins.push(location);
        this.confirmLocations();
    }
}
