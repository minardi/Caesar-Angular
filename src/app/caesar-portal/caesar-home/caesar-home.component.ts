import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'caesar-home',
    templateUrl: './caesar-home.component.html',
    styleUrls: ['./caesar-home.component.scss']
})
export class CaesarHomeComponent implements OnInit {

	constructor (private router: Router,
		private http: Http) {
	}

	ngOnInit () {
		
    }

    
}

