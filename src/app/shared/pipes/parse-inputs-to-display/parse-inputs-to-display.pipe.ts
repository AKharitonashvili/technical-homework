import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseInputsToDisplay',
  standalone: true,
})
export class ParseInputsToDisplayPipe implements PipeTransform {
  transform(value: any[] | null): any[][] | null {
    if (!value) return null;

    return value.map((item) => {
      const key = Object.keys(item)[0];
      const val = item[key];
      return [key, val];
    });
  }
}
