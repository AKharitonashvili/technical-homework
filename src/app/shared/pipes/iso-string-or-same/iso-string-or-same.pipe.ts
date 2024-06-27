import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'isoStringOrSame',
  standalone: true,
})
export class IsoStringOrSamePipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'string' && this.isIsoDate(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return formatDate(date, 'HH:mm:ss MMM dd yyyy', 'en-US');
      }
    }
    return value;
  }

  private isIsoDate(value: string): boolean {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/;
    return isoDateRegex.test(value);
  }
}
