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
import { JourneyService } from 'src/app/journey.service';

@Component({
  selector: 'app-journey-planner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage implements OnInit {

  //imports for planning a Journey and sending it to the database
  //the map will be displayed for the user who can drag markers to start and end point
  map: GoogleMap;
  startJourney: Marker;
  endJourney: Marker;
  //these will be the values that will be sent to that database as a document
  start: ILatLng;
  end: ILatLng;

  constructor(private router: Router, private journeyService: JourneyService) { }

  ngOnInit() {
    this.loadMap();
  }

  //loads the map above ireland - will be changes in future builds for improved functionality
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
  }


  search(location: string) {
    //clear the markers from the Map if the user decides to do a second search
    //so as not to confuse the data that will be sent to the database
    this.map.clear();

    //the location typed in by the User is converted to latlng co-ordinates by the Geocoder Object
    //the map is then sent to focus on this location
    //the user is then given two markers to drag to a start location and end location
    Geocoder.geocode
      ({
        "address": location
      })
      .then((results: GeocoderResult[]) => {
        this.map.setCameraTarget(results[0].position);
        this.map.setCameraZoom(10);
        this.endJourney = this.map.addMarkerSync({
          title: "End Journey",
          icon: 'Red',
          position: results[0].position,
          draggable: true,
        });

        this.startJourney = this.map.addMarkerSync({
          title: "Start Journey",
          icon: 'Blue',
          position: results[0].position,
          draggable: true,
        });
      })
  }
  //this is the beginning of the largest set of function calls in the app
  //its setup in a cascading way as to handle the asynchrounous nature of the Geocoding
  addJourneyToDatabase() {
    //first check that someone is logged in
    //if not found then alert the User as a user is required for a Journey
    if (!this.journeyService.getUser()) {
      alert("Please Log in to add a Journey")
    }
    else {
      //first gather the required information from the user that is logged on from the device
      let user: any = this.journeyService.getUser();
      let userName: string = user.email
      //get the positions of where they have dragged the start and end of journey markers
      this.start = this.startJourney.getPosition();
      this.end = this.endJourney.getPosition();
      //all this information is passed here for formatting to be sent to that database as a document
      this.getJourneyInformation(this.start.lat, this.start.lng, this.end.lat, this.end.lng, userName)
    }
  }
  //this function reverse Geocodes a latlng for the start address
  //this information is used to delete a Journey in the databasePage
  getJourneyInformation(x: number, y: number, x2: number, y2: number, user: string) {
    let waitForAddress: string = null
    let checkAddress: string[]
    Geocoder.geocode
      ({
        position:
          {
            "lat": x,
            "lng": y
          }
        //this is asynchronous so all of the information must be handled here for consistancy
      }).then((results: GeocoderResult[]) => {
        checkAddress = results[0].extra.lines
        waitForAddress =
          checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
          + ", " + checkAddress[3] + ", " + checkAddress[4]
        //the same logic is then used to geocode the end address
        this.finishGetJourneyInformation(x, y, x2, y2, user, waitForAddress)
      })
  }
  //the same as the above function for the other street addess of the end loaction
  finishGetJourneyInformation(x: number, y: number, x2: number, y2: number, user: string, startLoc: string) {
    let waitForAddress: string = null
    let checkAddress: string[];
    Geocoder.geocode
      ({
        position:
          {
            "lat": x2,
            "lng": y2
          }
      }).then((results: GeocoderResult[]) => {
        checkAddress = results[0].extra.lines
        waitForAddress =
          checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
          + ", " + checkAddress[3] + ", " + checkAddress[4]
        this.addToDataBase(y, x, y2, x2, user, startLoc, waitForAddress)
      })
  }
  //finally after the street addresses have been obtained from the co-ordinates of where the markers are then
  //send all of the information to the service to be stored on firebase as a document
  addToDataBase(x1: number, y1: number, x2: number, y2: number, user: string, startLoc: string, endLoc: string) {
    this.journeyService.sendJourney(x1, y1, x2, y2, user, startLoc, endLoc);
    //alert the user and return them to the homepage
    alert("Journey added!")
    this.router.navigate(['home']);
  }
}