import { Component, OnInit } from '@angular/core';
import { ChangeUsersService } from './../../services/change-users.service';
import { GetUsersService } from './../../services/get-users.service';

import { User, Item } from './../../models';

@Component({
  selector: 'app-user-tours',
  templateUrl: './user-tours.component.html',
  styleUrls: ['./user-tours.component.css']
})
export class UserToursComponent implements OnInit {

  private userTours: Item[];

  constructor(private _getUsersService: GetUsersService,
              private _changeUsers: ChangeUsersService) {
    console.log("tours component"); 
    this._getUsersService.currentUser.subscribe((user) => {
      this.userTours = user.tours;
    });
  }

  ngOnInit() {
  }

}
