import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task1Component {}
