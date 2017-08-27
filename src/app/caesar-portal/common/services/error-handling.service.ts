import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class ErrorHandlingService {
    constructor (private router: Router) {
    }

    check (status): void {
        if (status === 401) {
            this.router.navigate(['/log']);
        }
    }
}

