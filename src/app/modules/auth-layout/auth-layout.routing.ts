import {Routes} from '@angular/router';
import {AuthLayoutComponent} from './auth-layout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: (): any => import('./components/login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: (): any => import('./components/register/register.component').then(c => c.RegisterComponent)
      },
    ]
  }
];
