import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
   constructor(private router:Router){   }

   //add methods here
   visitMapPage()
   {
     this.router.navigate(['map']);
   }
   navigateJourneyPlanner(){
    this.router.navigate(['journey-planner']);
   }

}
