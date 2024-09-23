/* eslint-disable @angular-eslint/directive-selector */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({  selector: `[winConfirm]` })
export class WindowConfirmDirective {
  @Output() winConfirm: EventEmitter<any> = new EventEmitter();
  @Input() winConfirmMessage = '¿Seguro?';
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() { this.isPressed = true; }
  @HostListener('mouseup') hasReleased() { this.isPressed = false; }
}

export const DIRECTIVAS_ATRIBUTO = [ WindowConfirmDirective, ]
