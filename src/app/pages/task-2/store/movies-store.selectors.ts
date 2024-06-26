import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies-store.reducers';

export const MOVIES_FEATURE_KEY = 'Movies';

const selectMoviesFeature =
  createFeatureSelector<MoviesState>(MOVIES_FEATURE_KEY);

export const selectMoviesLoading = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.loading,
);

export const selectMoviesError = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.error,
);

export const selectMovies = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.movies,
);
