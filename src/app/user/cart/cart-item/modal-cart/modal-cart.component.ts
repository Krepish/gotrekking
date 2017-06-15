import { Component, OnInit } from '@angular/core';
import { ModalService } from './../../../../services/modal.service';
import { ChangeUsersService } from './../../../../services/change-users.service';
import { Item } from './../../../../models';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.css']
})
export class ModalCartComponent implements OnInit {
  public currentCartItem;

  constructor(private _modal: ModalService,
              private _changeUsers: ChangeUsersService) { 
    this._modal.cartItem.subscribe(cartItem => this.currentCartItem = cartItem);
  }

  private buyTour(currentCartItem: Item){
    this._changeUsers.buyTour(currentCartItem);
  }
  ngOnInit() {
  }

}
