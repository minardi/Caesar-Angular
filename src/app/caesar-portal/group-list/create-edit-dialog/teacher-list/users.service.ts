import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../../../environments/environment';


@Injectable()
export class usersService {

    constructor (private http: Http) {}

    getUsers () {
        return this.http.get('/users');
    }
}
