import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const positionLevelValidator = (): ValidatorFn => {
  const validLevels = ['Junior', 'Middle', 'Senior'];
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !validLevels.includes(value)) {
      return { invalidPositionLevel: true };
    }
    return null;
  };
};
