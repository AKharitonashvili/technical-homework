import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputFormFieldComponent } from './custom-input-form-field.component';

describe('CustomInputFormFieldComponent', () => {
  let component: CustomInputFormFieldComponent;
  let fixture: ComponentFixture<CustomInputFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
