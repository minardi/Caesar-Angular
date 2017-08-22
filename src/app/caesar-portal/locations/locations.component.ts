import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Response} from '@angular/http';

import { Location } from '../common/models/location';
import { LocationsService } from './locations.service';

@Component({
    selector: 'caesar-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
    locations: Location[];
    error: any;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService, private locationsService: LocationsService) {}

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
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

}
