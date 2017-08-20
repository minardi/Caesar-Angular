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
    errorMessage: string;

    constructor (
        private router: Router,
        private caesarLoginService: CaesarLoginService) {
    }

    ngOnInit () {
        
    }

  

    keyPress (event: any): void {
        this.errorMessage = 'Incorrect login or password. Please, try again.';
 
        let enterButton: number = 13,
            escButton: number = 27;

        if (event.keyCode === enterButton) {
            this.logIn();
        }

        if (event.keyCode === escButton) {
            this.clearForm();
        } 
    }

    logIn (): void {
        this.caesarLoginService.login(this.data.login, this.data.password)
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
        this.data.login = '';
        this.data.password = '';
        this.errorMessage = '';
    } 
}


