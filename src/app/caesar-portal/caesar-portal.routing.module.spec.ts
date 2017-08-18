import { CaesarPortalComponent } from './caesar-portal.component';
import { CaesarPortalModule } from './caesar-portal.module';
import { routing } from './caesar-portal.routing.module';

import { CaesarHomeComponent } from './caesar-home/caesar-home.component';
import { CaesarLoginComponent } from './caesar-login/caesar-login.component';

import { LoginGuard } from './caesar-login/guard/caesar-login.guard';
import { Router, CanActivate } from '@angular/router';

import {
    async,              
    inject,            
    TestBed
} from '@angular/core/testing';

let MockRouter = {
    navigateByUrl: function (url: string) {
        return url; 
    }
}

describe('Guard: LoginGuard ', () => {
    let component: LoginGuard ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [
                { provide: Router, useClass: MockRouter },
                LoginGuard
            ]
        })
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(LoginGuard);

            component = fixture.componentInstance;
        });
    }));

    describe('LoginGuard', () => {
        it('should call Router.navigateByUr',
            inject([Router], (router: Router) => {

            const spy = spyOn(router, 'navigateByUrl');

            component.canActivate();
            const url = spy.calls.first().args[0];

            expect(url).toBe('/log');
        }));
    });
});

//doesn't work yet