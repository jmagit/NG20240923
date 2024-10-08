import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MySizerComponent } from './components/my-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/mis-validadores.directive';
import { ShowDirective } from './directives/show.directive';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { FilterPipe, OrderByPipe } from './pipes/colecciones.pipe';
import { SelectDirective, UnlessDirective } from './directives/estructurales.directive';



@NgModule({
  declarations: [ PIPES_CADENAS, MySizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES,
    ShowDirective, DIRECTIVAS_ATRIBUTO, FilterPipe, OrderByPipe, UnlessDirective, SelectDirective, ],
  exports: [ PIPES_CADENAS, MySizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES,
    ShowDirective, DIRECTIVAS_ATRIBUTO, FilterPipe, OrderByPipe, UnlessDirective, SelectDirective, ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
