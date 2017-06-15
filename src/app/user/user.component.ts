import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './../services/get-users.service';
import { AuthService } from './../services/auth.service';

import { User } from './../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public currentUser: User;
 
  constructor(private _getUsersService: GetUsersService, 
              private _auth: AuthService) {
    console.log("user component"); 
    this._getUsersService.currentUser.subscribe((user) => {
      return this.currentUser = user;
    });
  }
  
  private logOut(){
    this._auth.logOut();
  }

  ngOnInit() {
  }

}
