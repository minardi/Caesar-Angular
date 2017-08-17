import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CaesarLoginService {
    constructor (private http: Http) { 
    }
 
    login (username: string, password: string) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post('/login', JSON.stringify({username: username, password: password}), 
        	{headers: headers});
    }
}

