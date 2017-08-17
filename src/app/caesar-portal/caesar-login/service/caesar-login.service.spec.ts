import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CaesarLoginService } from './caesar-login.service';

describe('CaesarLoginService', () => {
    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
            Http,
            CaesarLoginService,
        ]);

        this.caesarLoginService = this.injector.get(CaesarLoginService);
        this.backend = this.injector.get(ConnectionBackend) as MockBackend;
        this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });
 
    it('should url to consist of login', () => {
        this.caesarLoginService.login();
            expect(this.lastConnection.request.url).toMatch(/login/);
    });
});

