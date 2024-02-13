import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MySizerComponent } from './components/my-sizer.component';



@NgModule({
  declarations: [ PIPES_CADENAS, MySizerComponent, ],
  exports: [ PIPES_CADENAS, MySizerComponent, ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
