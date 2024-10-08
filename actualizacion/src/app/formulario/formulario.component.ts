import { Component, Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../common-services';
import { AUTH_REQUIRED } from '../security';
import { FormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { TypeValidator, NIFNIEValidator } from '../../lib/my-core/directives/mis-validadores.directive';
import { ErrorMessagePipe } from '../../lib/my-core/pipes/cadenas.pipe';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  constructor(protected http: HttpClient, entidad: string, protected option = {}) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
  }
}

@Injectable({ providedIn: 'root' })
export class PersonasDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'personas', { context: new HttpContext().set(AUTH_REQUIRED, true), })
  }

}
@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf, TypeValidator, NIFNIEValidator, JsonPipe, ErrorMessagePipe]
})
export class FormularioComponent {
  modo: 'add' | 'edit' = 'add'
  elemento: any = {}
  listado: Array<any> = []

  constructor(private dao: PersonasDAOService, private notify: NotificationService) { }

  add() {
    this.elemento = {}
    this.modo = 'add'
  }

  edit(id: number) {
    this.dao.get(this.elemento.id).subscribe({
      next: data => {
        this.elemento = data
        this.modo = 'edit'
      },
      error: err => this.notify.add(`${err.status}: ${err.message}`)
    })
    // this.elemento = { id, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, fecha: '2000-01-01', nif: '12345678z', correo: 'pg@example.com' }
    // this.modo = 'edit'
  }

  cancel() {

  }

  send() {
    switch (this.modo) {
      case 'add':
        //alert(`POST ${JSON.stringify(this.elemento)}`);
        this.dao.add(this.elemento).subscribe({
          next: () => this.cancel(),
          error: err => this.notify.add(`${err.status}: ${err.message}`)
        })
        break;
      case 'edit':
        // alert(`PUT ${JSON.stringify(this.elemento)}`);
        this.dao.change(this.elemento.id, this.elemento).subscribe({
          next: () => this.cancel(),
          error: err => this.notify.add(`${err.status}: ${err.message}`)
        })
        break;
    }
  }

}
