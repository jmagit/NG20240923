import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: []
})
export class HomeComponent {
  title: string = 'Hola mundo';

  constructor() { }

}
