import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AuthenticatedUserGuard} from './core/guards/authenticated-user.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthenticatedUserGuard],
    loadChildren: (): any => import('./modules/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    path: 'auth',
    loadChildren: (): any => import('./modules/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
  },
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
