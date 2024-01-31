import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { CommonComponentsModule } from './common-components';
import { MyCoreModule } from '@my/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, SecurityModule, CommonComponentsModule,
    MyCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
