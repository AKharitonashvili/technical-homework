import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../../../../shared/ui/buttons/button/button.component';
import { CalendarComponent } from '../../../../shared/ui/calendar/calendar/calendar.component';
import { AutocompleteInputComponent } from '../../../../shared/ui/inputs/autocomplete-input/autocomplete-input.component';
import { InputComponent } from '../../../../shared/ui/inputs/input/input.component';
import { TextareaComponent } from '../../../../shared/ui/inputs/textarea/textarea.component';
import { PositionFormArray } from '../../models/form.models';

@Component({
  selector: 'app-job-position',
  standalone: true,
  imports: [
    MatCardModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    CalendarComponent,
    AutocompleteInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './job-position.component.html',
  styleUrl: './job-position.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPositionComponent {
  @Input() formGroup!: FormGroup<PositionFormArray>;
  @Output() removePosition = new EventEmitter();
}
