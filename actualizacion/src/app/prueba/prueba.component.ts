import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@my/core';
import { CardComponent } from '../common-components/card.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
    selector: 'app-prueba',
    templateUrl: './prueba.component.html',
    styleUrls: ['./prueba.component.css'],
    standalone: true,
    imports: [CardComponent, CalculadoraComponent]
})
export class PruebaComponent implements OnInit {

  constructor(private out: LoggerService) { }

  ngOnInit(): void {
  }

}
