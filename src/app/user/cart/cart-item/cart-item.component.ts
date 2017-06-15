import { Component, OnInit, Input } from '@angular/core';
import { ChangeUsersService } from './../../../services/change-users.service';
import { ModalService } from './../../../services/modal.service';
import { Item } from './../../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Item;

  constructor(private _changeUsers: ChangeUsersService,
              private _modal: ModalService) { }

  private toBuyTour(cartItem: Item){
    this._modal.cartItem.next(cartItem);
  }

  private deleteTour(cartItem: Item){
    this._changeUsers.deleteTour(cartItem);
  }

  ngOnInit() {
  }

}
