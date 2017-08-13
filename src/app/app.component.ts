import { Component } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor(private http: Http) {
    //TODO: remove when auth logic is done 
    const body = JSON.stringify({
      username: "OlegShvets",
      password: "ghd22df"
    });

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post('/login', body, {
      headers: headers
    }).subscribe();

  }
}


