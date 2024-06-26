import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../../../../shared/ui/buttons/button/button.component';
import { CalendarComponent } from '../../../../shared/ui/calendar/calendar/calendar.component';
import { AutocompleteInputComponent } from '../../../../shared/ui/inputs/autocomplete-input/autocomplete-input.component';
import { InputComponent } from '../../../../shared/ui/inputs/input/input.component';
import { TextareaComponent } from '../../../../shared/ui/inputs/textarea/textarea.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobFormArray } from '../../models/form.models';
import { JobPositionComponent } from '../job-position/job-position.component';
import { MatDividerModule } from '@angular/material/divider';
import { CustomInputComponent } from '../../../../shared/ui/inputs/custom-input/custom-input.component';
import { CustomInputFormFieldComponent } from '../../../../shared/ui/inputs/custom-input-form-field/custom-input-form-field.component';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [
    MatCardModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    CalendarComponent,
    AutocompleteInputComponent,
    ReactiveFormsModule,
    JobPositionComponent,
    MatDividerModule,
    CustomInputComponent,
    CustomInputFormFieldComponent,
  ],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  @Input() formGroup!: FormGroup<JobFormArray>;
  @Output() removeJob = new EventEmitter();
  @Output() removePosition = new EventEmitter<number>();
  @Output() addPosition = new EventEmitter();
}
