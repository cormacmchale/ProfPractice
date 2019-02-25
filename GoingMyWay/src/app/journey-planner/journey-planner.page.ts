import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  ILatLng
} from '@ionic-native/google-maps';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geocoder, GeocoderResult } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-journey-planner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage implements OnInit {
  map: GoogleMap;
  new: ILatLng;
  start: ILatLng;
  end: ILatLng;
  startJourney:Marker;
  endJourney:Marker;
  posA: ILatLng =
    {
      lat: 53.270962,
      lng: -9.062691
    };
  posB: ILatLng =
    {
      lat: 54.270962,
      lng: -9.062691
    };
  constructor(private router:Router) { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 53.270962,
          lng: -9.062691
        },
        zoom: 5,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('myMap', mapOptions);

    // testing
    // let marker: Marker = this.map.addMarkerSync({
    //   title: "A",
    //   icon: 'Blue',
    //   position: this.posA,
    //   draggable: true,
    // });
    // let marker2: Marker = this.map.addMarkerSync({
    //   title: "B",
    //   icon: 'Red',
    //   position: this.posB,
    //   draggable: true,
    // });
  }//loadMap()

  visitMapPage()
  {
    this.router.navigate(['map']);
  }
  navigateJourneyPlanner(){
   this.router.navigate(['journey-planner']);
  }
  search(location:string)
  {
    console.log(location)
    Geocoder.geocode
      ({
        "address":location
      })
      .then((results: GeocoderResult[])=>
      {
        console.log(results[0].position); 
        this.map.setCameraTarget(results[0].position);
        this.map.setCameraZoom(10);    
        
        this.endJourney = this.map.addMarkerSync({
          title: "End Journey",
          icon: 'Red',
          position: results[0].position,
          draggable: true,
        });

        //add second marker at different position
        this.new = results[0].position
        this.new.lat+=0.5;
        this.new.lng+=0.5;

        this.startJourney = this.map.addMarkerSync({
          title: "Start Journey",
          icon: 'Blue',
          position: this.new,
          draggable: true,
        });
      })
  }
  addJourneyToDatabase()
  {
    this.start = this.startJourney.getPosition();
    this.end = this.endJourney.getPosition(); 
    this.showPosition(this.start.lng,this.start.lat,this.end.lng,this.start.lat)
  }

  showPosition(x1: number, y1: number, x2: number, y2: number) 
  {
    console.log("marker A: " + x1 + " " + y1 + " marker B " + x2 + " " + y2);
  }
}