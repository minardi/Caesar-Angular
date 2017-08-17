import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';

@Injectable()
export class GroupService {
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(environment.serviceApi.groupsUrl);
  }

  delete(id: number) {
    return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
  }
}


