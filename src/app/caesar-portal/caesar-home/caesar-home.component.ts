import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { ErrorHandlingService } from '../common/services/error-handling.service';

@Component({
    selector: 'caesar-home',
    templateUrl: './caesar-home.component.html',
    styleUrls: ['./caesar-home.component.scss']
})
export class CaesarHomeComponent implements OnInit {

	constructor (
        private errorHandlingService: ErrorHandlingService,
        private http: Http) {
	}

	ngOnInit () {
		this.checkEndingSession();
    }
 
    checkEndingSession () {
    	if (localStorage.getItem('loggedUser')) {
    		this.http.get(environment.serviceApi.groupsUrl)
                .subscribe(data => {},
                    error => {
                        this.errorHandlingService.check(error.status);
                    }
                );
    	}
    }
}

