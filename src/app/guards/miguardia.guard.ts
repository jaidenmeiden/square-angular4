import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AutorizacionService} from "../services/autorizacion.service";

@Injectable({
  providedIn: 'root'
})
export class MiguardiaGuard implements CanActivate {
  loggedIn = false;

  constructor(
    private autorizacionService: AutorizacionService
  ) {
    this.autorizacionService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      })
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedIn;
  }

}
