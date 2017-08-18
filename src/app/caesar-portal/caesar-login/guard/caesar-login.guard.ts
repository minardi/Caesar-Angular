import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate { 
    constructor (private router: Router) { }
 
    canActivate () {
        if (localStorage.getItem('loginSuccess11')) {
            // logged in:
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/log']);
        return false;
    }
}
