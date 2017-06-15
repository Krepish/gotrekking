import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './../../services/get-users.service';
import { User } from './../../models';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public currentUser;
 
  constructor(private _getUsersService: GetUsersService) {
    console.log("user-data component"); 
    debugger
    this._getUsersService.currentUser.subscribe((user) => {
      debugger
      return this.currentUser = user;
    });
}

  ngOnInit() {
  }

}
