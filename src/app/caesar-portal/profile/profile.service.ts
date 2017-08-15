import { Injectable } from '@angular/core';
import {Http}         from '@angular/http';

import { environment } from '../../../environments/environment';
import { User }        from './user';


@Injectable()
export class ProfileService {

    constructor(private http: Http) {}

    getCurrentUser() {
        return this.http.get(environment.serviceApi.profileUrl);
    }
}
