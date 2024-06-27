import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputErrorToTextPipe } from '../../../pipes/input-error-to-text/input-error-to-text.pipe';

@Component({
  selector: 'app-autocomplete-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    InputErrorToTextPipe,
  ],
  templateUrl: './autocomplete-input.component.html',
  styleUrl: './autocomplete-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteInputComponent {
  @Input() label!: string;
  @Input() autoCompleteOptions!: string[];
  @Input({ required: true }) inputControl!: FormControl;
}
