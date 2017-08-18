import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CaesarLoginComponent } from './caesar-login.component';
import { CaesarLoginService } from './service/caesar-login.service';
import { Http, Headers } from '@angular/http';

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
}

let loginServiceStub = {
    request: {
        url: '/login',
        json: {
            "username": "Vasya",
           "password": "ananas"
        },
        header: new Headers({
            'Content-Type': 'application/json'
        })
    },

    login: function () {
        return this.request;
    }
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
            providers: [{ provide: Router, useValue: mockRouter }]
        });

        fixture = TestBed.overrideComponent(CaesarLoginComponent, {
            set: {
                providers: [{ provide: CaesarLoginService, useValue: loginServiceStub }]

      }})
        .createComponent(CaesarLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});

