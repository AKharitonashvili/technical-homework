import { createReducer, on } from '@ngrx/store';
import { MoviesActions } from '.';
import { Movie } from '../models/movies.model';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  movies: Movie[];
}

export const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: null,
};

export const moviesReducer = createReducer(
  initialState,
  on(
    MoviesActions.loadMovies,
    (state): MoviesState => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    MoviesActions.loadMoviesSuccess,
    (state, { movies }): MoviesState => ({
      ...state,
      loading: false,
      movies,
    }),
  ),
  on(
    MoviesActions.loadMoviesFailure,
    (state, { error }): MoviesState => ({
      ...state,
      loading: false,
      error,
    }),
  ),
);
