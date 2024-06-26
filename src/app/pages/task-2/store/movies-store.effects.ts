import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { MoviesActions } from '.';
import { MoviesApiService } from '../services/movies-api.service';

@Injectable()
export class MoviesEffects {
  movies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(({ title }) =>
        this.moviesService.getMovies(title).pipe(
          map((movies) => MoviesActions.loadMoviesSuccess({ movies })),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private moviesService: MoviesApiService,
  ) {}
}
