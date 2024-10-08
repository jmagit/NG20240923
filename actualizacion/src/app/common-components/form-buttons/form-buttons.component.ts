import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-form-buttons',
    templateUrl: './form-buttons.component.html',
    styleUrls: ['./form-buttons.component.css'],
    standalone: true,
    imports: []
})
export class FormButtonsComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('send-disabled') sendDisabled: boolean | null = false;
  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasSend(): boolean { return this.send.observed; }
  get hasCancel(): boolean { return this.cancel.observed; }
  get hasDelete(): boolean { return this.delete.observed; }
}

