import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { User } from './../common/models/user';


@Injectable()
export class ProfileService {

    constructor(private http: Http) {}

    getCurrentUser() {
        return this.http.get(environment.serviceApi.profileUrl)
                        .catch((error: any) => Observable.throw(error));
    }
}
