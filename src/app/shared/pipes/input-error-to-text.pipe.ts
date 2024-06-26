import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputErrorToText',
  standalone: true,
})
export class InputErrorToTextPipe implements PipeTransform {
  transform(value: object | null, ...args: unknown[]): string[] {
    if (!value) {
      return [];
    }
    const map = new Map(Object.entries(value));
    map.forEach((val, key) => {
      switch (key) {
        case 'required':
          map.set(key, `Error: this field is ${key}`);
          break;
        case 'invalidUrl':
          map.set(key, `Error: this should be valied url`);
          break;
        case 'minlength':
          map.set(key, `Error: too short`);
          break;
      }
    });
    console.log(map);
    return Array.from(map.values());
  }
}
