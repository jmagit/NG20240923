/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnDestroy, OnInit, Output, forwardRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterLink } from '@angular/router';
import { ContactosViewModelService } from './servicios.service';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgFor, DatePipe } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { TypeValidator, IbanValidator } from '../../lib/my-core/directives/mis-validadores.directive';
import { ShowErrorsMessagesComponent } from '../common-components/show-errors-messages/show-errors-messages.component';
import { ShowErrorsDirective } from '../../lib/my-core/directives/atributos.directive';
import { FormButtonsComponent } from '../common-components/form-buttons/form-buttons.component';
import { ErrorMessagePipe } from '../../lib/my-core/pipes/cadenas.pipe';

@Component({
    selector: 'app-contactos',
    templateUrl: './tmpl-anfitrion.component.html',
    // providers: [ ContactosViewModelService ],
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, forwardRef(() => ContactosAddComponent), forwardRef(() => ContactosEditComponent), forwardRef(() => ContactosViewComponent), NgSwitchDefault, forwardRef(() => ContactosListComponent)]
})
export class ContactosComponent implements OnInit, OnDestroy {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void {
    //this.vm.list();
    this.vm.load();
  }
  ngOnDestroy(): void {
    this.vm.clear()
  }
}

/*
@Component({
  selector: 'app-contactos-list',
  templateUrl: './tmpl-list.sin-rutas.component.html',
  styleUrls: ['./componente.component.css']
})
export class ContactosListComponent implements OnInit, OnDestroy {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void {  }
}

@Component({
  selector: 'app-contactos-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class ContactosAddComponent implements OnInit {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void { }
}

@Component({
  selector: 'app-contactos-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class ContactosEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}

@Component({
  selector: 'app-contactos-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class ContactosViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}
*/

@Component({
    selector: 'app-contactos-list',
    templateUrl: './tmpl-list.con-rutas.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [NgIf, RouterLink, NgFor, PaginatorModule]
})
export class ContactosListComponent implements OnInit {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void {
    //this.vm.list();
    this.vm.load();
  }
}

@Component({
    selector: 'app-contactos-add',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, TypeValidator, ShowErrorsMessagesComponent, IbanValidator, ShowErrorsDirective, FormButtonsComponent, ErrorMessagePipe]
})
export class ContactosAddComponent implements OnInit {
  constructor(protected vm: ContactosViewModelService) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void {
    this.VM.add();
  }
}

@Component({
    selector: 'app-contactos-edit',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, TypeValidator, ShowErrorsMessagesComponent, IbanValidator, ShowErrorsDirective, FormButtonsComponent, ErrorMessagePipe]
})
export class ContactosEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: ContactosViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.edit(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
    selector: 'app-contactos-view',
    templateUrl: './tmpl-view.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [DatePipe]
})
export class ContactosViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: ContactosViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): ContactosViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.view(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const CONTACTOS_COMPONENTES = [
  ContactosComponent, ContactosListComponent, ContactosAddComponent,
  ContactosEditComponent, ContactosViewComponent,
];
