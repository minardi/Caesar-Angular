import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate { 
    constructor (private router: Router) { }
 
    canActivate () {
        if (localStorage.getItem('loginSuccess13')) {

            return true;
        }

        this.router.navigate(['/log']);
        
        return false;
    }
}
