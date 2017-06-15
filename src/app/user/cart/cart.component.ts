import { Component, OnInit } from '@angular/core';
import { GetUsersService }  from './../../services/get-users.service';
import { ChangeUsersService } from './../../services/change-users.service';

import { User, Item } from './../../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private userCart: Item[];

  constructor(private _getUsersService: GetUsersService,
              private _changeUsers: ChangeUsersService) {
    console.log("cart component"); 
    this._getUsersService.currentUser.subscribe((user) => {
      this.userCart = user.cart;
    });
  }

  ngOnInit() {
  }

  private emptyCart(){
    this._changeUsers.emptyCart();
  }

}