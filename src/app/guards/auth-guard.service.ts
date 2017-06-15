import { Injectable }     from '@angular/core';
import { Router, CanActivate }    from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate():boolean {
    if(this._auth.isLoggedIn()){
      console.log('AuthGuard#canActivate called');
      // debugger
      return true;
    }else {
      this._router.navigate(['/home']);
      // debugger
      return false;
    }


  }
}