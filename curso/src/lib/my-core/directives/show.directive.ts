import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[myShow]'
})
export class ShowDirective {
  @HostBinding('hidden') hidden: boolean = false;
  @Input('myShow') set show(value: boolean) { this.hidden = !value; }

}
