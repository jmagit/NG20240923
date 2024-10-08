import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { AuthInterceptor, SecurityModule } from './security';
import { CommonComponentsModule } from './common-components';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import GraficoSvgComponent from './grafico-svg/grafico-svg.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AjaxWaitInterceptor } from './main/ajax-wait';
import { ContactosModule } from './contactos';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { PruebaComponent } from './prueba/prueba.component';
// import { BlogModule } from './blog';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, FormsModule,
        AppRoutingModule, MainModule, SecurityModule, CommonComponentsModule,
        MyCoreModule, CommonServicesModule, ContactosModule, DemosComponent,
        DinamicoComponent,
        CalculadoraComponent,
        GraficoSvgComponent,
        FormularioComponent,
        GeolocationComponent,
        PruebaComponent], providers: [
        LoggerService,
        { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
        { provide: LOCALE_ID, useValue: 'es-ES' },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
        { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
