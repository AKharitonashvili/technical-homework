import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../../shared/ui/inputs/input/input.component';
import { TextareaComponent } from '../../shared/ui/inputs/textarea/textarea.component';
import { ButtonComponent } from '../../shared/ui/buttons/button/button.component';
import { CalendarComponent } from '../../shared/ui/calendar/calendar/calendar.component';
import { AutocompleteInputComponent } from '../../shared/ui/inputs/autocomplete-input/autocomplete-input.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JobFormArray, PositionFormArray } from './models/form.models';
import { JobCardComponent } from './components/job-card/job-card.component';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { positionLevelValidator } from '../../shared/validators/position.validators';
import { urlValidator } from '../../shared/validators/urls.validators';

@Component({
  selector: 'app-task-1',
  standalone: true,
  imports: [
    MatCardModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    CalendarComponent,
    AutocompleteInputComponent,
    JobCardComponent,
    UpperCasePipe,
    NgClass,
    MatDividerModule,
    DatePipe,
  ],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task1Component {
  jobFormArray: FormArray<FormGroup<JobFormArray>> = new FormArray<
    FormGroup<JobFormArray>
  >([]);

  constructor() {
    this.jobFormArray.push(this.generateCompanyForm());
  }

  generateCompanyForm(): FormGroup<JobFormArray> {
    return new FormGroup({
      companyName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      companyWebPage: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, urlValidator()],
      }),
      companyDescription: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      positions: new FormArray<FormGroup<PositionFormArray>>([
        this.generatePositionForm(),
      ]),
    });
  }

  generatePositionForm(): FormGroup<PositionFormArray> {
    return new FormGroup({
      positionName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      positionDescription: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      positionLevel: new FormControl<'Junior' | 'Middle' | 'Senior'>('Junior', {
        nonNullable: true,
        validators: [positionLevelValidator()],
      }),
      dateFrom: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      dateTo: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  addCompanyForm() {
    this.jobFormArray.push(this.generateCompanyForm());
  }

  addPositionForm(FormGroup: FormGroup) {
    const positionControl: FormArray = FormGroup.controls[
      'positions'
    ] as FormArray;
    positionControl.push(this.generatePositionForm());
    this.jobFormArray.push(this.generateCompanyForm());
  }

  removeJob(index: number) {
    this.jobFormArray.removeAt(index);
  }

  addPosition(index: number) {
    this.jobFormArray.controls[index].controls.positions.push(
      this.generatePositionForm(),
    );
  }

  removePosition(positionIndex: number, formIndex: number) {
    this.jobFormArray.controls[formIndex].controls.positions.removeAt(
      positionIndex,
    );
  }
}
