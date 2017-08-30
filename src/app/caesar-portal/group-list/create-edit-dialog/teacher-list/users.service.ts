import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../common/models/user';
import { USERS } from './mock-users';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsersService {

    constructor () {
    }

    public getUsers(): Observable<User[]> {
    	return Observable.of(USERS);
    }
}
