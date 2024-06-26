import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'task-1',
    loadComponent: () =>
      import('./pages/task-1/task-1.component').then((x) => x.Task1Component),
  },
  { path: '', redirectTo: '/task-1', pathMatch: 'full' },
];
