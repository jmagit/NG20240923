import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponent } from './prueba.component';
import { LoggerService } from '@my/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PruebaComponent', () => {
  let component: PruebaComponent;
  let fixture: ComponentFixture<PruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaComponent,  ],
      providers: [ LoggerService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
