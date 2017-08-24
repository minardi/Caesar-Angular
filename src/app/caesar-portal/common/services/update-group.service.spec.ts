import { TestBed, inject } from '@angular/core/testing';

import { UpdateGroupService } from './update-group.service';

describe('UpdateGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateGroupService]
    });
  });

  it('should be created', inject([UpdateGroupService], (service: UpdateGroupService) => {
    expect(service).toBeTruthy();
  }));
});
