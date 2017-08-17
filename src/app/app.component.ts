import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private http: Http) { }
   // TODO: remove when auth logic is done
  ngOnInit() {
    const body = JSON.stringify({
      username: 'DmytroPetin',
      password: 'fgdfg24sd'
    });

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post('/login', body, {
      headers: headers
    }).subscribe();
  }
}

