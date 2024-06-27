import { NgClass, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IsHolidayPipe } from '../../../pipes/is-holiday/is-holiday.pipe';
import { IsCurrentDayPipe } from '../../../pipes/is-current-day/is-current-day.pipe';

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [NgClass, UpperCasePipe, IsHolidayPipe, IsCurrentDayPipe],
  templateUrl: './custom-calendar.component.html',
  styleUrl: './custom-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCalendarComponent {
  @Input() holidays: Date[] = [];
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentYear: number;
  currentMonth: number;
  calendarDays: Date[] = [];

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  ngOnInit() {
    this.generateCalendar();
    console.log(this.holidays.map((v) => new Date(v)));
  }

  generateCalendar() {
    this.calendarDays = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      this.calendarDays.push(
        new Date(this.currentYear, this.currentMonth, 0 - i),
      );
    }
    this.calendarDays.reverse();

    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.calendarDays.push(new Date(this.currentYear, this.currentMonth, i));
    }

    for (let i = 1; i < 7 - lastDay.getDay(); i++) {
      this.calendarDays.push(
        new Date(this.currentYear, this.currentMonth + 1, i),
      );
    }
  }
}
