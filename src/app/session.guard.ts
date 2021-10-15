import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './service/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: SessionService
) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      
      console.log('can activate');

    if(this.service.IsStillInSession()) {
      return true;
     }else{
      this.router.navigate(['']);

      return false;
    }

  }
  
}
