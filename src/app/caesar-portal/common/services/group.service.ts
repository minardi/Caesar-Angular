import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.myGroupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  getGroupsByLocations(locationIds: number[]): Observable<Group[]> {
    let data = { locations: locationIds };

    return this.http.post(environment.serviceApi.filterGroupsUrl, data, this.options).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  getCurrentLocationGroups(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.groupsMyLocationUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  delete(id: number) {
    return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
  }

  private extractGroupsData(obj) {
    return new Group(obj.groupId, obj.name, obj.startDate, obj.finishDate, obj.experts);
  }
}


