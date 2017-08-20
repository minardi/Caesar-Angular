import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class GroupService {
  constructor(private http: Http) { }

  getAll(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.groupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  delete(id: number) {
    return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.myGroupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  private extractGroupsData(obj) {
    return new Group(obj.groupId, obj.name, obj.startDate, obj.finishDate, obj.experts);
  }
}


