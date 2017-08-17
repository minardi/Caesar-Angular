import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProfileService],
            imports: [HttpModule]
        });
    });

    it('should be created', inject([ProfileService], (service: ProfileService) => {
        expect(service).toBeTruthy();
    }));
});
