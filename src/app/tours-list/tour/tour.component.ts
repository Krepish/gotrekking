import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeUsersService } from './../../services/change-users.service';
import { ModalService } from './../../services/modal.service';

import { User, Tour } from './../../models';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: Tour;
  @Input() isLoggedIn;

  //public currentTour = {};

  //public orderedTour: Tour = new Tour();

  constructor(private _changeUsers: ChangeUsersService, 
              private _modal: ModalService) {
  }

  private order(tour: Tour){
    console.log(tour.tourName);
    this._modal.tour.next(tour);
    //this.orderedTour = tour;
    //debugger
    this._changeUsers.addTour(tour);
  }

  ngOnInit() {
  }

}
