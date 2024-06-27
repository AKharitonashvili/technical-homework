import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../../shared/ui/inputs/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArrayInputComponent } from '../../shared/ui/inputs/array-input/array-input.component';
import {
  Observable,
  combineLatest,
  debounceTime,
  map,
  startWith,
  tap,
} from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { ParseInputsToDisplayPipe } from '../../shared/pipes/parse-inputs-to-display/parse-inputs-to-display.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { getSimilarityPercentages } from '../../shared/utils/matcher-calculator';

interface MatchingForm {
  input1: FormControl<string>;
  input2: FormControl<string[]>;
}
@Component({
  selector: 'app-task-5',
  standalone: true,
  imports: [
    MatCardModule,
    InputComponent,
    ReactiveFormsModule,
    ArrayInputComponent,
    AsyncPipe,
    ParseInputsToDisplayPipe,
    MatDividerModule,
    NgClass,
  ],
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task5Component {
  formGroup: FormGroup<MatchingForm> = new FormGroup<MatchingForm>({
    input1: new FormControl<string>('', { nonNullable: true }),
    input2: new FormControl<string[]>([], { nonNullable: true }),
  });

  vm$: Observable<{ result: { [key: string]: string }[] | null }> =
    combineLatest([
      this.formGroup.valueChanges.pipe(
        startWith({ input1: '', input2: [] }),
        debounceTime(300),
        map(({ input1, input2 }) => {
          if (!input1 || !input2) {
            return null;
          }
          return getSimilarityPercentages(input1, input2);
        }),
      ),
    ]).pipe(map(([result]) => ({ result })));
}
