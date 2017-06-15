import { Tour } from './../models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  public tour = new Subject();
  public cartItem = new Subject();

  constructor() { }

}
