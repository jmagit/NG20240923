import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  // providers: [ NotificationService, ]
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable | undefined;
  private nombre: string = 'mundo'
  public fecha = '2024-02-12'
  fontSize = 24
  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'barcelona'},
    {id: 3, nombre: 'BURGOS'},
    {id: 4, nombre: 'ciudad Real'},
  ]
  idProvincia = 2;

  resultado? : string

  visible = true
  estetica = { importante: true, error: false, urgente: true}

  constructor(public vm: NotificationService) { }
  public get Nombre(): string { return this.nombre }
  public set Nombre(value: string) {
    if(this.nombre === value) return
    this.nombre = value
  }

  saluda() {
    this.resultado = `Hola ${this.nombre}`
  }

  despide() {
    this.resultado = `Adios ${this.nombre}`
  }

  di(algo: string) {
    this.resultado = `Dice ${algo}`
  }

  cambia() {
    this.visible = !this.visible
    this.estetica.importante = !this.estetica.importante
    this.estetica.error = !this.estetica.error
  }

  calcula(a: number, b: number) { return a + b }

  add(provincia: string) {
    const id = this.listado.length ? (this.listado[this.listado.length -1].id + 1) : 1
    this.listado.push({id, nombre: provincia})
    this.idProvincia = id
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripcion: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

  idiomas = [
    { codigo: 'en-US', region: 'USA' },
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

  filtro(ele: any) {
    return ele.id > 2;
  }
}
