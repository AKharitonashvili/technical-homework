import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const urlValidator = (): ValidatorFn => {
  const urlPattern = /^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d-]{2,}(\/.*)?$/i;
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !urlPattern.test(value)) {
      return { invalidUrl: true };
    }
    return null;
  };
};
