import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Location } from '../models/location';
import { environment } from '../../../../environments/environment';

@Injectable()
export class LocationService {

    constructor(private http: Http) {}

    getLocations(): Observable<Location[]> {
        return this.http.get(environment.serviceApi.locationsUrl).
            map((res: Response) => res.json());
    }
}
