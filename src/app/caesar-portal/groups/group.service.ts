import { Group }   from './Group';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GroupService {
//    groups : Group[];

    constructor (private http: Http) {
        // this.groups = [new Group('Dp-17', 'PHP'), 
        // new Group('Dp-17', 'JS'), 
        // new Group('Dp-17', 'Java'),
        // new Group('Dp-18', 'PHP'), 
        // new Group('Dp-18', 'JS'), 
        // new Group('Dp-18', 'Java')]
    }
    
    getAll(){
        return this.http.get('http://localhost:3012/api/groups')
        
    }
}