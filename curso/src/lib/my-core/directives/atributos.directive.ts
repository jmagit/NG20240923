/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

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

@Directive({ selector: '[myShadow]' })
export class ShadowDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    el.nativeElement.style.boxShadow = '10px 10px 5px #888888';
    //renderer.setStyle(el.nativeElement, 'box-shadow', '10px 10px 5px #888888');
  }
}

export const DIRECTIVAS_ATRIBUTO = [ WindowConfirmDirective, ShadowDirective, ]
