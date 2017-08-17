import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CaesarLoginComponent } from './caesar-login.component';
import { CaesarLoginService } from './service/caesar-login.service';

// HELP!) This spec doesn't work with this mock and I can't write working one. 
let CaesarLoginServiceStub = {
    user: {
        login: 'Vasya',
        password: '1234'
    }
} 

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('CaesarLoginComponent', () => {
    let component: CaesarLoginComponent;
    let fixture: ComponentFixture<CaesarLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                HttpModule
            ],
            declarations: [ CaesarLoginComponent ],
            providers: [ {provide: Router, useValue: mockRouter} ]
        });

        fixture = TestBed.overrideComponent(CaesarLoginComponent, {
            set: {
                providers: [ {provide: CaesarLoginService, useValue: CaesarLoginServiceStub} ]

        }})
        .createComponent(CaesarLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        
    }));

    it('should be created', () => {
        expect(component).toBeTruthy();
    });


    it('should return nothing', () => {
        expect(component.logIn()).toBeUndefined();
    });
});

