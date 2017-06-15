import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './../../../services/modal.service';

@Component({
  selector: 'app-modal-tour',
  templateUrl: './modal-tour.component.html',
  styleUrls: ['./modal-tour.component.css']
})
export class ModalTourComponent implements OnInit {

  //@Input() orderedTour;
  private currentTour = {};

  constructor(private _modal: ModalService) { 
    this._modal.tour.subscribe(tour => this.currentTour = tour);
  }

  ngOnInit() {
  }

}
