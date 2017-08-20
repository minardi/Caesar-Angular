import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate { 
    constructor (private router: Router) { }
 
    canActivate () {
        if (localStorage.getItem('loggedUser')) {

            return true;
        }

        /*if path '/login' - after reloading the page error: 'This application has
         no explicit mapping for /error, so you are seeing this as a fallback'*/
        this.router.navigate(['/log']);
        
        return false;
    }
}
