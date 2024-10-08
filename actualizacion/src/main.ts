import { enableProdMode, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { LoggerService, ERROR_LEVEL } from '@my/core';
import { environment as environment_1 } from 'src/environments/environment';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor, SecurityModule } from './app/security';
import { AjaxWaitInterceptor } from './app/main/ajax-wait';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { MainModule } from './app/main';
import { ContactosModule } from './app/contactos';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, AppRoutingModule, MainModule, SecurityModule, ContactosModule),
        LoggerService,
        { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
        { provide: LOCALE_ID, useValue: 'es-ES' },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
        { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
