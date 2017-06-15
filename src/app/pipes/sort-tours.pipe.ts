import { Pipe, PipeTransform } from '@angular/core';
import { Tour } from '../models';

@Pipe({
  name: 'sortTours'
})
export class SortToursPipe implements PipeTransform {

  transform(tours: Tour[], direction, activity): any {
    if (tours !== undefined && (direction || activity)) {
      if(direction !== undefined){
        let sortTours: Tour[] = tours.filter(function(tour){
          return (tour.direction === direction);   
        });
      return sortTours;
    } else if (activity !== undefined) {
      let sortTours: Tour[] = tours.filter(function(tour){
        
          for(let i = 0; i<tour.activities.length; i++){
            debugger
            if(tour.activities[i] === activity) {
              return true;
            }
          }  
        });
      return sortTours;
    }
    } else {
      return tours;
  }
}
}
