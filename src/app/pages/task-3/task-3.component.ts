import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IsoStringOrSamePipe } from '../../shared/pipes/iso-string-or-same/iso-string-or-same.pipe';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-3',
  standalone: true,
  imports: [IsoStringOrSamePipe, MatCardModule],
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task3Component {
  dateInputs: string[] = [
    '2023-08-10T09:42:34.0734574Z',
    '08/10/2023',
    '10 Aug 2023',
    'Hello, World!',
    '2023-08-10T09:42:34Z',
    '2023-08-10T09:42:34+02:00',
    '2023-08-10',
  ];
}
