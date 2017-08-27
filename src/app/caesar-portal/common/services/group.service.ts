import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GroupService {
  group: Group = new Group();
  groupP: {group: Group} = {group: null};

  constructor(private http: Http) { }

  getAll(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.groupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  get (id: number): Promise<Group> {
    return this.http.get(`${environment.serviceApi.groupsUrl}/${id}`).
      toPromise().then(result => {
        const groupObj = result.json();
        const group: Group = this.extractGroupsData(groupObj);

        const stagePromise = this.getData(groupObj._links.status.href).
          then(data => {
            group.stage = data.name;
            
            return group;
          });

        const teachersPromise = this.getData(groupObj._links.teachers.href).
          then(data => {
            group.teachers = data._embedded.users;
            
            return group;
          });

        const locationsPromise = this.getData(groupObj._links.location.href).
          then(data => {
            group.location = data.name;
            
            return group;
          });

        return Promise.all([stagePromise, teachersPromise]).
          then(() => group);
      });
  }

  getData (url: string) {
    url = url.replace('http://caeser-api.com:8080', '');

    return this.http.get(url).toPromise().then(result => {
      return result.json();
    });
  }

  delete (id: number) {
    return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get(environment.serviceApi.myGroupsUrl).
      map(result => result.json().map(obj => this.extractGroupsData(obj)));
  }

  private extractGroupsData(obj) {
    return new Group(obj.groupId, obj.name, obj.startDate, obj.finishDate, obj.experts);
  }

  getGroup () {
    return this.group;
  }

  setGroup (group: Group) {
    this.group = Object.assign(this.group, group);
    // this.groupP.group = group;
  }
}