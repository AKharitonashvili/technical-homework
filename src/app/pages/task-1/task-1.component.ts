import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../../shared/ui/inputs/input/input.component';
import { TextareaComponent } from '../../shared/ui/inputs/textarea/textarea.component';
import { ButtonComponent } from '../../shared/ui/buttons/button/button.component';
import { CalendarComponent } from '../../shared/ui/calendar/calendar/calendar.component';

@Component({
  selector: 'app-task-1',
  standalone: true,
  imports: [
    MatCardModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    CalendarComponent,
  ],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task1Component {}
