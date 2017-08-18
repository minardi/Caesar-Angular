import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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

    constructor(private locationsService: LocationsService) { }

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
