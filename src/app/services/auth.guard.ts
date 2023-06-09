import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthStore } from './auth.store';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
 constructor(
  private auth: AuthStore,
  private router: Router) {

 }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  return this.checkIfAuthenticated();
 }

 canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>{
  return this.checkIfAuthenticated();
 }

 private checkIfAuthenticated(){
  return this.auth.isLoggedIn$.pipe(map(loggedIn => loggedIn ? true : this.router.parseUrl('/login')))
 }
}