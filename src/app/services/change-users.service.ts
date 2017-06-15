import { Injectable } from '@angular/core';
import { GetUsersService } from './get-users.service';

import { User, Item, Tour } from './../models';

@Injectable()
export class ChangeUsersService {

  private users: User[];
  private currentUser: User;
  private newItem: Item;

  constructor(private _getUsersService: GetUsersService) { 
    this._getUsersService.users.subscribe((users) => this.users = users);
    this._getUsersService.currentUser.subscribe((currentUser) => this.currentUser = currentUser);
  }

  public updateCurrentUserData(currentUser: User){
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    this._getUsersService.updateCurrentUser();
  }

  public updateUsersData(currentUser: User){
    let users = this.users.map(function(user){
      if(user.email === currentUser.email) {
        return currentUser;
      } else {
        return user;
      }
    });
    localStorage.setItem('users', JSON.stringify(users));
    this._getUsersService.updateUsers();
  }
  private update(user: User){
    this.updateCurrentUserData(user);
    this.updateUsersData(user);
  }

  public addTour(tour: Tour){
    console.log("Добавлен новый тур! " + tour.tourName);
    this.newItem = new Item(tour, Date.now(), false);
    this.currentUser.cart.push(this.newItem);
    this.update(this.currentUser);
  }

  public deleteTour(cartItem: Item){
    console.log("Delete tour! " + cartItem.tour.tourName);
    let currentCart = this.currentUser.cart.filter(function(item){
      if(item.dateOfOrder !== cartItem.dateOfOrder){
        return item;
      }
    });
    this.currentUser.cart = currentCart;
    this.update(this.currentUser);  
  }
  
  public emptyCart(){
    this.currentUser.cart = [];
    this.update(this.currentUser);
  }

  public buyTour(cartItem: Item){
    this.deleteTour(cartItem);
    cartItem.dateOfPurchase = Date.now();
    cartItem.confirmation = true;
    this.currentUser.tours.push(cartItem);
    this.update(this.currentUser);
  }

}
