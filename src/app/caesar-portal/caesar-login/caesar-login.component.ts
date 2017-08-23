import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CaesarLoginService } from './service/caesar-login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'caesar-login',
    templateUrl: './caesar-login.component.html',
    styleUrls: ['./caesar-login.component.scss']
})
export class CaesarLoginComponent implements OnInit {
	data: any = {};

    constructor (
        private router: Router,
        private caesarLoginService: CaesarLoginService) {
    }

    ngOnInit () {
        this.deleteSession();
    }

    deleteSession (): void {
        if (localStorage.getItem('loggedUser')) {
                localStorage.removeItem('loggedUser');
        }
    }

    keyPress (event: any): void {
        let escButton: number = 27;

        if (event.keyCode === escButton) {
            this.clearForm();
        } 
    }

    login (): void {
        this.caesarLoginService.login(this.data.username, this.data.password)
            .subscribe(
                data => {
                    localStorage.setItem('loggedUser', 'success');
                    this.router.navigate(['/']);
                },
                error => {
                    this.data.password = '';
                }
            ); 
    } 

    clearForm (): void {
        this.data.username = '';
        this.data.password = '';
    } 
}


