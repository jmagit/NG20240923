import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent },
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
  ]
  actual: any = this.menu[0].componente

  constructor() { }

  seleccionar(index: number) {
    this.actual = this.menu[index].componente
  }
}