import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MySizerComponent } from './components/my-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';



@NgModule({
  declarations: [ PIPES_CADENAS, MySizerComponent, PIPES_NUMERICOS, ],
  exports: [ PIPES_CADENAS, MySizerComponent, PIPES_NUMERICOS, ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
