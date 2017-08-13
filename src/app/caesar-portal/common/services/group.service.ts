import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class GroupService {

  constructor(private http: Http) { }
  
  getAll(){
        return this.http.get(environment.serviceApi.groupsUrl);
    }
}
