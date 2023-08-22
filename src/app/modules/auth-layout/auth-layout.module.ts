import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AUTH_ROUTES} from './auth-layout.routing';
import {AuthLayoutComponent} from './auth-layout.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '../../shared/validator/validator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    NgbCollapseModule,
    ReactiveFormsModule,
    ValidatorComponent,
  ],
  declarations: [AuthLayoutComponent]
})
export class AuthLayoutModule {
}
