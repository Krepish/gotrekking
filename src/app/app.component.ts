import { AuthService } from './services/auth.service';
import { GetUsersService } from './services/get-users.service';
import { Component, OnInit } from '@angular/core';
import { initialUsers } from '../Data';

import { Router }  from '@angular/router';
import { User } from './models';

if(!(localStorage.getItem("users"))){
  localStorage.setItem("users", JSON.stringify(initialUsers));
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  private infoMessage: string;
  private modal: boolean = true;
  private currentUser: User;

  constructor(private _getUsersService: GetUsersService, private _auth: AuthService,
              private _router: Router) {
    this._getUsersService.currentUser.subscribe(user => this.currentUser = user);
  }

  public logIn(login, password) {
    console.log(login +  " " + password);
    if(this._auth.login(login,password)){
      this._router.navigate(['user']);
      this.infoMessage = "";
      this.modal = false;
    } else {
      this.infoMessage = "Неверные данные";
    }
  }

  private isLoggedIn(){
    this.modal = !this._auth.isLoggedIn();
  }

  ngOnInit() {
    this._getUsersService.getUsers();
    this._getUsersService.getCurrentUser();
  }
  ngDoCheck() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
}
