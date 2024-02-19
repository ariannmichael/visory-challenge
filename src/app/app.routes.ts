import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./modules/event-list/event-list.module')
      .then(mod => mod.EventListModule)
  },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: '**', redirectTo: 'events', pathMatch: 'full' },
];
