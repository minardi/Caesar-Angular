import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LoginGuard } from './caesar-login.guard';

describe('LoginGuard', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoginGuard
            ],
            imports: [
                RouterTestingModule
            ]
        });
    });

    it('should call router',
        async(inject([LoginGuard, Router], (auth, router) => {
            spyOn(router, 'navigate');

            expect(auth.canActivate()).toBeFalsy();
            expect(router.navigate).toHaveBeenCalled();
        })
    ));
});
