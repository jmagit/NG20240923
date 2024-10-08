import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ContactosComponent } from '../contactos';
import { NgFor, NgComponentOutlet } from '@angular/common';
import { LoginComponent } from '../security/login/login.component';
import { NotificationModalComponent } from '../main/notification-modal/notification-modal.component';
import { AjaxWaitComponent } from '../main/ajax-wait';
// import { BlogComponent } from '../blog';

@Component({
    selector: 'app-dinamico',
    templateUrl: './dinamico.component.html',
    styleUrls: ['./dinamico.component.css'],
    standalone: true,
    imports: [NgFor, LoginComponent, NotificationModalComponent, AjaxWaitComponent, NgComponentOutlet]
})
export class DinamicoComponent {
  menu = [
    // { texto: 'blog', icono: 'fa-solid fa-blog', componente: BlogComponent },
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'demos', icono: 'fa-solid fa-person-chalkboard', componente: DemosComponent },
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
    { texto: 'formulario', icono: 'fa-solid fa-chalkboard-user', componente: FormularioComponent },
    { texto: 'contactos', icono: 'fa-solid fa-address-book', componente: ContactosComponent },
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
  ]
  actual: any = this.menu[0].componente

  constructor() { }

  seleccionar(index: number) {
    this.actual = this.menu[index].componente
  }
}
