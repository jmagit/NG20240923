import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { CommonComponentsModule } from './common-components';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, SecurityModule, CommonComponentsModule,
    MyCoreModule, CommonServicesModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
