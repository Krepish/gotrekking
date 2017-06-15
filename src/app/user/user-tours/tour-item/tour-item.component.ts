import { Component, OnInit, Input } from '@angular/core';
import { ChangeUsersService } from './../../../services/change-users.service';
import { Item } from './../../../models';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.css']
})
export class TourItemComponent implements OnInit {

  @Input() tourItem: Item;

  constructor() { }

  ngOnInit() {
  }

}
