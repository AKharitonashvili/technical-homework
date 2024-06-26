import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @Input() label!: string;
  @Input({ required: true }) inputControl!: FormControl;
}
