import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { keyInterceptorInterceptor } from './pages/task-2/interceptors/key-interceptor.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MOVIES_FEATURE_KEY } from './pages/task-2/store/movies-store.selectors';
import { moviesReducer } from './pages/task-2/store/movies-store.reducers';
import { MoviesEffects } from './pages/task-2/store/movies-store.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([keyInterceptorInterceptor])),
    provideStore(),
    provideEffects(),
    provideStore(),
    provideState({ name: MOVIES_FEATURE_KEY, reducer: moviesReducer }),
    provideEffects([MoviesEffects]),
  ],
};
