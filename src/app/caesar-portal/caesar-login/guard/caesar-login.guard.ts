import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate {
    constructor (private router: Router) { }
 
    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('loginSuccess2')) {
            // logged in:
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/log'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
