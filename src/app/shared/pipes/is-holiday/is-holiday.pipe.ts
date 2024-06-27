import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isHoliday',
  standalone: true,
})
export class IsHolidayPipe implements PipeTransform {
  transform(date: Date, holidays: Date[]): boolean {
    return holidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear(),
    );
  }
}
