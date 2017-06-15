import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import  "rxjs/add/operator/publishReplay";
import { User } from './../models';

@Injectable()
export class GetUsersService {

  public users$: Subject<any> = new Subject();
  public users: Observable<User[]>;

  public currentUser$: Subject<any> = new Subject();
  public currentUser: Observable<User> ;

  constructor() {
    console.log("конструктор сервиса юзер")

    this.users$.subscribe();
    this.users = this.users$.publishReplay(1).refCount();   
    this.users.subscribe();

    this.currentUser$.subscribe();
    this.currentUser = this.currentUser$.publishReplay(1).refCount();   
    this.currentUser.subscribe();
  }

  public getUsers(){    
    this.users$.next(JSON.parse(localStorage.getItem("users")));
  }  

  public getCurrentUser(){
    this.currentUser$.next(JSON.parse(localStorage.getItem("currentUser")));
  }

  public updateUsers(){    
    this.getUsers();
  }

  public updateCurrentUser(){
    this.getCurrentUser();
  }

}
