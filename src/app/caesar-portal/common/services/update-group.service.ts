import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from '../models/location';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UpdateGroupService {

  constructor(private http: Http) { }

  getLocations(): Observable<Location[]> {
    return this.http.get(environment.serviceApi.locationsUrl).
    map((response: Response) => {
      return <Location[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
