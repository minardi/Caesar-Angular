import { inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { CaesarLoginService } from './caesar-login.service';


describe("CaesarLoginService", () => {

    let subject: CaesarLoginService;
    let backend: MockBackend;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                CaesarLoginService
            ]
        });
    });

    beforeEach(inject([CaesarLoginService, MockBackend], (caesarLoginService: CaesarLoginService, mockBackend: MockBackend) => {
        subject = caesarLoginService;
        backend = mockBackend;
    }));

    it("#login should be defined",
        inject([CaesarLoginService], (service: CaesarLoginService) => {
            expect(service.login('Vasya', '1234')).toBeDefined();
    }));

    //in process
});


