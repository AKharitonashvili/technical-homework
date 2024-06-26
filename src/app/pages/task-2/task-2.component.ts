import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { Movie } from './models/movies.model';
import { Store } from '@ngrx/store';
import { MoviesActions, MoviesSelectors } from './store';
import { MatCardModule } from '@angular/material/card';
import { FormControl, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/ui/inputs/input/input.component';
import { ButtonComponent } from '../../shared/ui/buttons/button/button.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ImageFallBackDirective } from '../../shared/directives/image-fallback/image-fall-back.directive';
import { TitleTypeToTextPipe } from '../../shared/pipes/title-type-to-text.pipe';

@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardModule,
    InputComponent,
    ButtonComponent,
    MatProgressBarModule,
    MatIconModule,
    ImageFallBackDirective,
    TitleTypeToTextPipe,
  ],
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task2Component {
  store = inject(Store);

  titleControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  vm$: Observable<{
    movies: Movie[];
    loading: boolean;
    error: string | null;
  }> = combineLatest([
    this.store.select(MoviesSelectors.selectMovies),
    this.store.select(MoviesSelectors.selectMoviesLoading),
    this.store.select(MoviesSelectors.selectMoviesError),
  ]).pipe(map(([movies, loading, error]) => ({ movies, loading, error })));

  submit(e: Event) {
    e.preventDefault();
    if (this.titleControl.valid) {
      this.store.dispatch(
        MoviesActions.loadMovies({ title: this.titleControl.value }),
      );
    }
  }
}
