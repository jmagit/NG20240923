import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-list-buttons',
    template: `
    <div class="btn-group" role="group">
      @if (hasView) {
        <button class="btn btn-info" (click)="view.emit(null)"><i class="fas fa-eye"></i></button>
      }
      @if (hasEdit) {
        <button class="btn btn-success" (click)="edit.emit(null)"><i class="fas fa-pen"></i></button>
      }
      @if (hasDelete) {
        <button class="btn btn-danger" (click)="delete.emit(null)"><i class="far fa-trash-alt"></i></button>
      }
    </div>
    `,
    standalone: true,
    imports: []
})
export class ListButtonsComponent {
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasView(): boolean { return this.view.observed; }
  get hasEdit(): boolean { return this.edit.observed; }
  get hasDelete(): boolean { return this.delete.observed; }

  constructor() { }
}
