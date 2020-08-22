import { Component } from '@angular/core';

import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: object[] = [];

  constructor(http: HttpClient) {
    const observable = http.get<object[]>('http://localhost:3000/flavio/photos');
    observable.subscribe(photos => this.photos = photos);

  }

}

