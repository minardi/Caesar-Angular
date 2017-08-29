import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsComponent } from './locations.component';
import { LocationService } from '../common/services/location.service';

describe('LocationsComponent', () => {
    let component: LocationsComponent;
    let fixture: ComponentFixture<LocationsComponent>;

    beforeEach(() => {
        // stub LocationsService for test purposes
        const locationsServiceStub = {
            locations: [
                {
                    'id': 1,
                    'name': 'Dnipro'
                },
                {
                    'id': 2,
                    'name': 'Sofia'
                }
            ],
            getLocations: () => {
                return this.locations;
            }
      };

    TestBed.configureTestingModule({
          declarations: [ LocationsComponent ],
          providers: [ {provide: LocationService, useValue: locationsServiceStub } ]
    });

    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
        // UserService from the root injector
        const locationsService = TestBed.get(LocationService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
