import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { InputErrorToTextPipe } from '../../../pipes/input-error-to-text.pipe';

@Component({
  selector: 'app-custom-input-form-field',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CustomInputComponent,
    InputErrorToTextPipe,
  ],
  templateUrl: './custom-input-form-field.component.html',
  styleUrl: './custom-input-form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputFormFieldComponent {
  @Input() label!: string;
  @Input({ required: true }) inputControl!: FormControl;
}
