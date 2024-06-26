import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface Position {
  positionName: string;
  positionLevel: 'Junior' | 'Middle' | 'Senior';
  positionDescription: string;
  dateFrom: string;
  dateTo: string;
}

export interface Company {
  companyName: string;
  companyWebPage: string;
  companyDescription: string;
  positions: Position[];
}

export type ToFormGroup<T> = {
  [P in keyof T]-?: FormControl<T[P]>;
};

export type ToFormArray<T> = {
  [P in keyof T]-?: ToFormGroup<T[P]>;
};

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
