import { CaesarPortalComponent } from './caesar-portal.component';
import { CaesarPortalModule } from './caesar-portal.module';
import { routing } from './caesar-portal.routing.module';
import { FormsModule } from '@angular/forms';

import { CaesarHomeComponent } from './caesar-home/caesar-home.component';
import { CaesarLoginComponent } from './caesar-login/caesar-login.component';

import { LoginGuard } from './caesar-login/guard/caesar-login.guard';
import { Router, CanActivate } from '@angular/router';

import { CaesarLoginService } from './caesar-login/service/caesar-login.service';
import { Http, Headers } from '@angular/http';

import {
    async,              
    inject,            
    TestBed
} from '@angular/core/testing';

let MockRouter = {
    navigateByUrl (url: string) {
        return url; 
    }
}

describe('Guard: LoginGuard ', () => {
    let component: CaesarLoginComponent ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CaesarLoginComponent
            ],
            providers: [
                { provide: Router, useValue: MockRouter },
                CaesarLoginService
            ],
            imports: [
                FormsModule, 
                Http
            ]
        })
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(CaesarLoginComponent);

            component = fixture.componentInstance;
        });
    }));

    xit('should call Router.navigateByUr',
        inject([Router, CaesarLoginService], (router: Router, 
            caesarLoginService: CaesarLoginService) => {

            const spy = spyOn(router, 'navigateByUrl');

            caesarLoginService.login('DmytroPetin', 'fgdfg24sd');
            const url = spy.calls.first().args[0];

            expect(url).toBe('/');
        })
    );
});
