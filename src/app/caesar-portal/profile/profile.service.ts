import { Injectable } from '@angular/core';

import { User }        from './user';
import { currentUser } from './mock-user';

@Injectable()
export class ProfileService {
    getCurrentUser(): Promise<User> {
        return Promise.resolve(currentUser);
    }
}
