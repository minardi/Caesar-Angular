import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CaesarLoginComponent } from './caesar-login.component';
import { CaesarLoginService } from './service/caesar-login.service';

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
}

let loginSpy = jasmine.createSpy('login').and.returnValue(Observable.of(true));

describe('CaesarLoginComponent', () => {
    let component: CaesarLoginComponent;
    let fixture: ComponentFixture<CaesarLoginComponent>;
    let caesarLoginService: CaesarLoginService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                HttpModule
            ],
            declarations: [ 
                CaesarLoginComponent
            ],
            providers: [
                { provide: Router, useValue: mockRouter },
                CaesarLoginService
            ]
        });

        fixture = TestBed.overrideComponent(CaesarLoginComponent, {
            set: {
                providers: [
                    { provide: CaesarLoginService, useValue: loginSpy }
                ]
      }})
        .createComponent(CaesarLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        caesarLoginService = TestBed.get(CaesarLoginService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('stub object and injected UserService should not be the same', () => {
        component.clearForm();
        expect(component.data.password).toBe('');
    });

    xit('Should get quote', fakeAsync(() => {
        component.login();
        tick();
        fixture.detectChanges();

        expect(loginSpy).toHaveBeenCalled();
    }));
});

