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
import { Geocoder, GeocoderResult, BaseArrayClass } from '@ionic-native/google-maps/ngx';
import { JourneyService } from 'src/app/journey.service';
//hopefully will be used to fix async geodoing error
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-journey-planner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage implements OnInit {

  map: GoogleMap;
  startJourney: Marker;
  endJourney: Marker;
  start: ILatLng;
  end: ILatLng;

  constructor(private router: Router, private journeyService: JourneyService, private alertController: AlertController) { }

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
  }//loadMap()

  visitMapPage() {
    this.router.navigate(['map']);
  }
  navigateJourneyPlanner() {
    this.router.navigate(['journey-planner']);
  }
  search(location: string) {
    this.map.clear();
    console.log(location)
    Geocoder.geocode
      ({
        "address": location
      })
      .then((results: GeocoderResult[]) => {
        console.log(results[0].position);
        this.map.setCameraTarget(results[0].position);
        this.map.setCameraZoom(10);
        let mark: number = results[0].position.lat;
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
  addJourneyToDatabase() {
    if (!this.journeyService.getUser()) {
      alert("Please Log in to add a Journey")
    }
    else {
      let user: any = this.journeyService.getUser();
      let userName: string = user.email
      this.start = this.startJourney.getPosition();
      this.end = this.endJourney.getPosition();
      this.getJourneyInformation(this.start.lat, this.start.lng, this.end.lat, this.end.lng, userName)
      //this.showPosition(this.start.lng, this.start.lat, this.end.lng, this.end.lat, userName)
    }
  }

  addToDataBase(x1: number, y1: number, x2: number, y2: number, user: string, startLoc: string, endLoc: string) {
    this.journeyService.sendJourney(x1, y1, x2, y2, user, startLoc, endLoc);
    alert("Journey added!")
    this.router.navigate(['home']);
  }

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
      }).then((results: GeocoderResult[]) => {
        console.log(results)
        checkAddress = results[0].extra.lines
        waitForAddress =
          checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
          + ", " + checkAddress[3] + ", " + checkAddress[4]
        this.finishGetJourneyInformation(x, y, x2, y2, user, waitForAddress)
      })
  }
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
        console.log(results)
        checkAddress = results[0].extra.lines
        waitForAddress =
          checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
          + ", " + checkAddress[3] + ", " + checkAddress[4]
        this.addToDataBase(y, x, y2, x2, user, startLoc, waitForAddress)
      })
  }

}