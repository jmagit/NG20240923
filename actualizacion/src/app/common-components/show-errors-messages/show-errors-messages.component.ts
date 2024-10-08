import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ErrorMessagePipe } from '@my/core';

@Component({
    selector: 'app-show-errors-messages',
    templateUrl: './show-errors-messages.component.html',
    styleUrls: ['./show-errors-messages.component.css'],
    standalone: true
})
export class ShowErrorsMessagesComponent implements OnChanges  {
  @Input() errors: any;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('pattern-msg') patternMsg?: string;

  mensaje = '';
  hidden = false;
  converter = new ErrorMessagePipe()

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.errors) {
      this.hidden = true;
      return;
    }
    let msg = '';
    if(this.patternMsg) {
      msg = this.converter.transform(this.errors, this.patternMsg)
    } else {
      msg = this.converter.transform(this.errors)
    }
    this.mensaje = msg.trim();
    this.hidden = this.mensaje === '';
  }

}
