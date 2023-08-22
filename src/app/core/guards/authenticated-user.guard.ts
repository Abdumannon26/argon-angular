import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate, CanLoad {
  isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  constructor(
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthenticatedUser(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.isAuthenticatedUser();
  }

  private isAuthenticatedUser(url?: string): boolean {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/auth/login'], {queryParams: {returnUrl: url}});
    return false;
  }
}
