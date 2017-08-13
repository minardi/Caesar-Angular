import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GroupService {

  constructor(private http: Http) { }
  
  getAll(){
        return this.http.get('http://localhost:3012/api/groups')
    }
}
