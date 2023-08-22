import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'tables',
        pathMatch: 'full'
      },
      {
        path: 'tables',
        loadComponent: (): any => import('./components/tables/tables.component').then(c => c.TablesComponent)
      },
      {
        path: ':id',
        loadComponent: (): any => import('./components/post-detail/post-detail.component').then(c => c.PostDetailComponent),
        data: { heroPower: 'Force',}
      }
    ]
  }
];
