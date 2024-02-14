import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  modo: 'add' | 'edit' = 'add'
  elemento: any = {}

  constructor() { }

  add() {
    this.elemento = {}
    this.modo = 'add'
  }

  edit(id: number) {
    this.elemento = { id, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, fecha: '2000-01-01', nif: '12345678z', correo: 'pg@example.com'}
    this.modo = 'edit'
  }

  cancel() {

  }

  send() {
    switch(this.modo) {
      case 'add':
        alert(`POST ${JSON.stringify(this.elemento)}`);
        break;
      case 'edit':
        alert(`PUT ${JSON.stringify(this.elemento)}`);
        break;
    }
  }

}
