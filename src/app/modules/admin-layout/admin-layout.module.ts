import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ADMIN_ROUTES} from './admin-layout.routing';
import {AdminLayoutComponent} from './admin-layout.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AdminService} from './services/admin.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FormsModule,
  ],
  declarations: [AdminLayoutComponent],
  providers: [AdminService]
})

export class AdminLayoutModule {
}
