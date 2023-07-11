import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardAutorize } from './auth-guard-Autorize.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServicesGuard implements CanActivate {

  constructor(
    private autorize: AuthGuardAutorize
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.autorize.autorizado())
      return this.autorize.autorizado();
  }


}
