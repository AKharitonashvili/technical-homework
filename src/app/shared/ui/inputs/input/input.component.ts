import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputErrorToTextPipe } from '../../../pipes/input-error-to-text.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    InputErrorToTextPipe,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) inputControl!: FormControl;
}
