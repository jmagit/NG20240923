import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@my/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private out: LoggerService) { }

  ngOnInit(): void {
  }

}
