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
export class Task3Component {}
