/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import isIBAN from 'validator/es/lib/isIBAN.js'

export function nifnieValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    const err = { nifnie: { invalidFormat: true, invalidChar: true, message: 'NIF o NIE invalido' } };
    if (/^((\d{1,8})|([X-Z]\d{7}))[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(control.value.toUpperCase())) {
      const charsValue: {[index: string]: string} = { X: '0', Y: '1', Z: '2', };
      const numberValue = +((control.value as string).slice(0, -1).replace(/[X,Y,Z]/g, char => charsValue[char]));
      err.nifnie.invalidFormat = false;
      return control.value.toUpperCase().endsWith('TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23)) ? null : err;
    } else { return err; }
  };
}
@Directive({
    selector: '[nifnie][formControlName],[nifnie][formControl],[nifnie][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NIFNIEValidator, multi: true }],
    standalone: true
})
export class NIFNIEValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return nifnieValidator()(control);
  }
}

export function uppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toString().toUpperCase() ? null : { uppercase: 'Tiene que estar en mayúsculas' }
  };
}
@Directive({
    selector: '[uppercase][formControlName],[uppercase][formControl],[uppercase][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidator, multi: true }],
    standalone: true
})
export class UppercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return uppercaseValidator()(control);
  }
}

@Directive({
    selector: '[type][formControlName],[type][formControl],[type][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => TypeValidator), multi: true }
    ],
    standalone: true
})
export class TypeValidator implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (valor) {
      const dom = this.elem.nativeElement;
      if (dom.validity) { // dom.checkValidity();
        return (dom.validity.typeMismatch || dom.validity.stepMismatch) ? { 'type': dom.validationMessage } : null;
      }
    }
    return null;
  }
}

// https://es.iban.com/estructura

export function ibanValidator(control: AbstractControl): { [key: string]: any } | null {
  if (!control.value) { return null; }
  return isIBAN(control.value.toString()) ? null : { iban: 'No es un IBAN valido' }
}
@Directive({
    selector: '[iban][formControlName],[iban][formControl],[iban][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IbanValidator, multi: true }],
    standalone: true
})
export class IbanValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return ibanValidator(control);
  }
}

export function isNotBlankValidator(control: AbstractControl): { [key: string]: any } | null {
  return control.value != null && control.value != undefined && control.value.toString().trim() !== '' ? null : { isNotBlank: 'No puede estar vacío' }
}

export const MIS_VALIDADORES = [NIFNIEValidator, UppercaseValidator, TypeValidator, IbanValidator, ]
