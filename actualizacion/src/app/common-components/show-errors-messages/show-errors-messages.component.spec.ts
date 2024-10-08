import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorsMessagesComponent } from './show-errors-messages.component';

describe('ShowErrorsMessagesComponent', () => {
  let component: ShowErrorsMessagesComponent;
  let fixture: ComponentFixture<ShowErrorsMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ShowErrorsMessagesComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
