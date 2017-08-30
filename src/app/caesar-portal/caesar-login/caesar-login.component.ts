import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CaesarLoginService } from './service/caesar-login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'caesar-login',
    templateUrl: './caesar-login.component.html',
    styleUrls: ['./caesar-login.component.scss']
})
export class CaesarLoginComponent implements OnInit {
	data: any = {};
    loginForm: FormGroup;

    constructor (
        private router: Router,
        private caesarLoginService: CaesarLoginService) {
    }

    ngOnInit () {
        this.deleteSession();

        this.loginForm = new FormGroup({
            'username': new FormControl('', [
                            Validators.required,
                            Validators.pattern('^[a-zA-Z]{4,15}$')
                            ]),
            'password': new FormControl('', [
                                Validators.required, 
                                Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{4,10}$') 
                            ])
        });
    }

    public deleteSession (): void {
        if (localStorage.getItem('loggedUser')) {
            localStorage.removeItem('loggedUser');
        }
    }

    public keyPress (event: any): void {
        let escButton: number = 27;

        if (event.keyCode === escButton) {
            this.clearForm();
        } 
    }

    private login (): void {
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

    private clearForm (): void {
        this.data.username = '';
        this.data.password = '';
        this.loginForm.markAsUntouched();
    } 
}


