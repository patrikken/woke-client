import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService,private _router: Router) {}

  canActivate() {
     if(!this.authService.isLogged()){
         this._router.navigate(['/login']) 
      } 
    return this.authService.isLogged();
  }
}