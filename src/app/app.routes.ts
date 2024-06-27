import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Routes } from '@angular/router';
import { keyInterceptorInterceptor } from './pages/task-2/interceptors/key-interceptor.interceptor';

export const routes: Routes = [
  {
    path: 'task-1',
    loadComponent: () =>
      import('./pages/task-1/task-1.component').then((x) => x.Task1Component),
  },
  {
    path: 'task-2',
    loadComponent: () =>
      import('./pages/task-2/task-2.component').then((x) => x.Task2Component),
    providers: [
      provideHttpClient(withInterceptors([keyInterceptorInterceptor])),
    ],
  },
  {
    path: 'task-3',
    loadComponent: () =>
      import('./pages/task-3/task-3.component').then((x) => x.Task3Component),
    providers: [
      provideHttpClient(withInterceptors([keyInterceptorInterceptor])),
    ],
  },
  {
    path: 'task-4',
    loadComponent: () =>
      import('./pages/task-4/task-4.component').then((x) => x.Task4Component),
    providers: [
      provideHttpClient(withInterceptors([keyInterceptorInterceptor])),
    ],
  },
  {
    path: 'task-5',
    loadComponent: () =>
      import('./pages/task-5/task-5.component').then((x) => x.Task5Component),
    providers: [
      provideHttpClient(withInterceptors([keyInterceptorInterceptor])),
    ],
  },
  { path: '', redirectTo: '/task-1', pathMatch: 'full' },
];
