import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { GetUsersService } from './../services/get-users.service';
import { User } from './../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input() currentUser: User;

  constructor(private _getUsersService: GetUsersService) { 
    this._getUsersService.currentUser.subscribe((user) => this.currentUser = user)
  }

  ngOnInit() {
  }

}
