import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface PositionFormArray {
  positionName: FormControl<string>;
  positionLevel: FormControl<'Junior' | 'Middle' | 'Senior'>;
  positionDescription: FormControl<string>;
  dateFrom: FormControl<string>;
  dateTo: FormControl<string>;
}

export interface JobFormArray {
  companyName: FormControl<string>;
  companyWebPage: FormControl<string>;
  companyDescription: FormControl<string>;
  positions: FormArray<FormGroup<PositionFormArray>>;
}
