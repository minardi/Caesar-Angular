import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

@Injectable()
export class LocationsService {

    constructor(private http: Http) {}

    getLocations() {
        return this.http.get(environment.serviceApi.locationsUrl)
                        .catch((error: any) => Observable.throw(error));
    }
}
