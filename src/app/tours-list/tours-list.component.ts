import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { ActivatedRoute} from '@angular/router';

import { GetToursService } from './../services/get-tours.service';
import { GetUsersService } from './../services/get-users.service';
import { AuthService } from './../services/auth.service';
import { ChangeUsersService } from './../services/change-users.service';
import { Tour, User } from '../models';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  public allTours: Tour[];
  private tours: Tour[];
  private directions: Array<string>;
  private activities: Array<string>;
  private directionValue: string;
  private activitiyValue: string;
  private toursNotFound: boolean;
  public isLoggedIn: boolean;

  private currentUser: User;

  public direction: string;
  public activity: string;

  constructor(private _getTours: GetToursService,
              private _auth: AuthService,
              private _getUsersService: GetUsersService,
              private _changeUsers: ChangeUsersService,
              private _route: ActivatedRoute) { 
    
    this._getTours.getToursList()
                  .subscribe((data:Response) => {
                     this.allTours = data.json(); 
                     //debugger
                     this.tours = this.allTours;
                     this.directions = this.getDirections();
                     this.activities = this.getActivivties();
                     //return;
                    });

    this.isLoggedIn = this._auth.isLoggedIn();      

    this._getUsersService.currentUser.subscribe((data) => {this.currentUser = data })    

    this._route.queryParams.subscribe(params => {this.direction = params["direction"];
                                                 this.activity = params["activity"]});       
  }

  //массив направлений
  private getDirections(){
    let directionsObj = {};
    let directionsList:Array<string> = [];
    let allDirections: Array<string> = [];
    for (var tour in this.allTours){
        allDirections.push(this.allTours[tour]['direction']);
    }
    for(let i=0; i < allDirections.length; i++ ) {
      var direct = allDirections[i];
      directionsObj[direct] = true;
    }
    directionsList = ((Object.keys(directionsObj)).sort());
    directionsList.unshift("Все направления");
    this.directionValue = "Все направления";
    return directionsList ;
  }

  //массив активностей
  private getActivivties(){
    let activitiesObj = {};
    let activitiesList:Array<string> = []; 
    let allActivities: Array<string> = [];
    for (var tour in this.allTours){
      let currentAct = this.allTours[tour]['activities'] 
      for(var activity in currentAct) {
        allActivities.push(currentAct[activity]);
      }
    }
    for(let i=0; i < allActivities.length; i++ ) {
      var active = allActivities[i];
      activitiesObj[active] = true;
    }
    activitiesList = (Object.keys(activitiesObj)).sort();
    activitiesList.unshift("Все активности");
    this.activitiyValue = "Все активности";
    return activitiesList;
  }

  private onSearch(direction, activity){
    this.tours = [];
    this.toursNotFound = false;
    if( direction === "Все направления" || direction === undefined ) {
      this.tours = this.allTours;
    } else {
      for(let i=0; i<this.allTours.length; i++){
        if(this.allTours[i]["direction"] === direction){
          this.tours.push(this.allTours[i]);
        } 
      }
    }
    if(activity === "Все активности" || activity === undefined) {

    } else {
      let activeTours = [];
      for(let i=0; i<this.tours.length; i++){
        let currentActivities = this.tours[i]["activities"];
        for(let j=0; j< currentActivities.length; j++){
          if(currentActivities[j] === activity){
            activeTours.push(this.tours[i]);
          }
        }      
      }
      this.tours = activeTours;
      if(this.tours.length == 0){
        this.toursNotFound = true;
      }
    }     
  }

  ngOnInit() {
  }  
 
}
