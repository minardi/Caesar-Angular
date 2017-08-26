import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LocationsService } from './locations.service';

describe('LocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([LocationsService], (service: LocationsService) => {
    expect(service).toBeTruthy();
  }));
});
