import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomCalendarComponent } from '../../shared/ui/calendar/custom-calendar/custom-calendar.component';

@Component({
  selector: 'app-task-4',
  standalone: true,
  imports: [CustomCalendarComponent],
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task4Component {
  globalHolidays: Date[] = [
    // June Holidays
    new Date('2024-06-01'), // International Children's Day
    new Date('2024-06-05'), // World Environment Day
    new Date('2024-06-12'), // Russia Day (Russia)
    new Date('2024-06-19'), // Juneteenth (USA)
    new Date('2024-06-21'), // International Yoga Day

    // July Holidays
    new Date('2024-07-01'), // Canada Day (Canada)
    new Date('2024-07-04'), // Independence Day (USA)
    new Date('2024-07-14'), // Bastille Day (France)
    new Date('2024-07-20'), // Independence Day (Colombia)
    new Date('2024-07-30'), // International Friendship Day
  ];
}
