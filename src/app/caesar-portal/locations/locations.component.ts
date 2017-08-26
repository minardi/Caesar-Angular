import { Component, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Response } from '@angular/http';

import { Location } from '../common/models/location';
import { LocationsService } from './locations.service';

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
        private locationsService: LocationsService) {}

    @Output() onOpenModal = new EventEmitter();
    private openModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template, {class: 'delete-dialog'});
    }

    ngOnInit() {
        this.locationsService.getLocations()
              .subscribe(
                  (data: Response) => this.locations = data.json(),
                  (error) => {
                      this.error = error;
                      console.error(error);
                  }
              );
    }

    private closeModal(): void {
        this.modalRef.hide();
        this.selectedLocatins = [];
    }

    private confirmLocations(): void {
        const result = this.selectedLocatins.join('+');
        this.closeModal();
        alert(`${result} will be confirmed`);
        // this.router.navigate([`locations/${result}`]);
    }

    private addLocation($event, location): void {
        const index = this.selectedLocatins.indexOf(location);

        if (index === -1) {
            this.selectedLocatins.push(location);
            $event.target.classList.toggle('selected');
        } else {
            this.selectedLocatins.splice(index, 1);
            $event.target.classList.toggle('selected');
        }
    }

    private addAndConfirmLocation(location) {
        this.selectedLocatins = [];
        this.selectedLocatins.push(location);
        this.confirmLocations();
    }
}
