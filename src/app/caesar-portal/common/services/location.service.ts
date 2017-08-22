import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Location } from '../models/location'
import { environment } from '../../../../environments/environment';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LocationService {

  constructor(private http: Http) { }

  getLocations() :  Observable<Location[]> {
    return this.http.get(environment.serviceApi.locationsUrl).
      map((res: Response) => res.json());
  }
}
