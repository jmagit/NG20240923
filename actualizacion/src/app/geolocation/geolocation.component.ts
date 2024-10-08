import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.css'],
    standalone: true
})
export class GeolocationComponent implements OnInit, OnDestroy {
  latitud?: number
  longitud?: number

  publisher$ = new Observable<any>(observer => {
    if(!window.navigator.geolocation) {
      observer.error('Geolocalización no disponible en el navegador')
    }
    const watchId = window.navigator.geolocation.watchPosition(pos => {
      observer.next({ latitud: pos.coords.latitude, longitud: pos.coords.longitude })
    }, error => {
      switch (error.code) {
        case error.PERMISSION_DENIED: observer.error('Permiso denegado por el usuario'); break;
        case error.POSITION_UNAVAILABLE: /*observer.error('Posición no disponible');*/ console.warn('Posición no disponible'); break;
        case error.TIMEOUT: observer.error('Tiempo de espera agotado'); break;
        default: observer.error(`Error desconocido en la geolocalización: ${error.code}`); break;
      }
    });
    return function unsubscribe() {
      window.navigator.geolocation.clearWatch(watchId)
    };
  });
  subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.publisher$.subscribe({
      next: data => {
        this.latitud = data.latitud
        this.longitud = data.longitud
        console.log('Cambia coordenadas')
      },
      error: err => console.error(err)
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
