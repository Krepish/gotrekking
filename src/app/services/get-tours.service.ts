import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GetToursService {

  constructor(private _http: Http) {};

  getToursList():Observable<any> {
    return this._http.get('../tours.json');
  }

}
