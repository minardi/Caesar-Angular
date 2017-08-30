import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GroupService } from './group.service';

describe('GroupService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GroupService],
            imports: [HttpModule]
        });
    });

    it('should be created', inject([GroupService], (service: GroupService) => {
        expect(service).toBeTruthy();
    }));
});
