import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, Marker, LatLng, ILatLng } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-journey-planner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage implements OnInit {
  map:GoogleMap;
  constructor() { }

  ngOnInit() {
    this.map = GoogleMaps.create('myMap');
  }
  planJourney(){
    console.log("clicked!");
    //when this function is used
    //console.log co-ordinates of marker and marker b
    //also a name-- 
    //these are for database
  }

}
