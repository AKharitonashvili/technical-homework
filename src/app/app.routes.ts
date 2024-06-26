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
  { path: '', redirectTo: '/task-1', pathMatch: 'full' },
];
