import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movies.model';

export const loadMovies = createAction(
  '[movies] Movies',
  props<{ title: string }>(),
);

export const loadMoviesSuccess = createAction(
  '[movies] Movies Success',
  props<{ movies: Movie[] }>(),
);

export const loadMoviesFailure = createAction(
  '[movies] Movies Failure',
  props<{ error: string }>(),
);
