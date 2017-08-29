import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';
import { User } from '../../common/models/user';
import { Observable } from 'rxjs/Observable';
import { Location } from '../../common/models/location';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class GroupService {
  group: Group = new Group();
  groupCurrent = new Subject<Group>();

  constructor(private http: Http,
              private subject: Subject<number>) {
  }

  getAll(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.groupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  get (id: number): Observable<Group> {
    return this.http.get(`${environment.serviceApi.groupsUrl}/${id}`).
      map(result => this.extractGroupsData(result.json()));
  }

  getLocation (url: string): Observable<Location> {
    return this.getData(url);
  }

  getStage (url: string): Observable<string[]> {
    return this.getData(url);
  }

  getTeachers (url: string): Observable<User[]> {
    return this.getData(url);
  }

  getData (url: string) {
    url = url.replace('http://caeser-api.com:8080', '');
    return this.http.get(url).map(result => result.json());
  }

  delete (id: number) {
    return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.myGroupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  private extractGroupsData(obj) {
    return new Group(obj.groupId, obj.name, obj.startDate, obj.finishDate, obj.experts, obj._links);
  }

  setGroupCurrent (group: Group) {
    this.groupCurrent.next(group);
  }
}