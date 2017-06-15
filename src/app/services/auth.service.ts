import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { GetUsersService } from './get-users.service';
import { User } from './../models';
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {

  private currentUser: User;

  constructor(private _getUsers: GetUsersService,
              private _router: Router) { }
 
  public login(email: string, password: string){
    let lowEmail: string = email.toLowerCase();
    this._getUsers.users.map((users) => {
          return users.filter((user) => user.email.toLowerCase() === lowEmail && 
                                        user.password === password)})
        .subscribe((user) => { 
                    console.log(user);
                    return this.currentUser = user[0] });

    if(this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      // localStorage.setItem('currentUserId', JSON.stringify(this.currentUser.id));
      //обновить данные о текущем пользователе
      this._getUsers.updateCurrentUser();
      return true;
    }
    return false;
  }
  
  public isLoggedIn(){
    if(localStorage.getItem("currentUser")){
      return true;
    } else {
      return false;
    }
  }

  public logOut(){
    localStorage.removeItem("currentUser");
    this._router.navigate(['/home']);
  }

}
