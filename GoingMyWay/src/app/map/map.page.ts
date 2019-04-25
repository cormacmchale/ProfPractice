import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, Marker, LatLng, ILatLng, GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { JourneyService } from 'src/app/journey.service';
import { dbInfo } from 'src/app/Journey';
import { Observable } from 'rxjs/internal/Observable';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  check: number;
  //check for a User
  user: any;

  constructor(private Journey: JourneyService, private geo: Geolocation) { }

  //A Map for showing the Journeys to a user
  map: GoogleMap;
  //database Journeys
  markersToShow: any[];

  ngOnInit() {
    //first get the Journey documents from the database
    this.loadDocuments();
    //get the location of the device
    this.findUser();
  }

  //find the users current position and then pass these into the load map function
  //this will error handle the wait time for getting the users position
  //log an error if neccessary
  findUser() {
    this.geo.getCurrentPosition().then((resp) => {
      this.loadMap(resp.coords.latitude, resp.coords.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  //load map waits for the Geolcation of the user and then centers the map on that location
  loadMap(lat: number, lng: number) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lng
        },
        zoom: 12,
        tilt: 30
      }
    };
    //create the map for the view
    this.map = GoogleMaps.create('myMap', mapOptions);
  }

  showJournies() {
    //first check for a user
    if (!this.Journey.getUser()) {
      alert("Please Log in to view Journies")
    }
    //if a valid user is found
    else {
      if (this.markersToShow != null) {
        for (let info of this.markersToShow) {
          //loop through all of the documents from the database
          //and one by one paint the Journeys from the database onto the map for the user
          //by adding the required information from the document into the function to do so
          this.addMarkerFromDatabase(
            info.payload.doc._document.proto.fields.endlat.doubleValue,
            info.payload.doc._document.proto.fields.endlong.doubleValue,
            info.payload.doc._document.proto.fields.startlat.doubleValue,
            info.payload.doc._document.proto.fields.startlong.doubleValue,
            info.payload.doc._document.proto.fields.name.stringValue)
        }
      }
      //if empty
      else {
        alert("No Journeys in Database");
      }
    }
  }
  //add markers from database
  addMarkerFromDatabase(x: number, y: number, x1: number, y1: number, title: string) {
    //initially this get a random vaild RGB colour based on the unique co-ordinates of the Journey
    let r: number = this.convertRgb(x)
    let g: number = this.convertRgb(y)
    let b: number = this.convertRgb(x1)
    //add the markers to the map
    //title is name of the user who added the Journey so the other Users can see who is driving
    let startMarker: Marker = this.map.addMarkerSync(
      {
        title: title,
        icon: 'rgb(' + r + ',' + g + ',' + b + ')',
        animation: 'Drop',
        position:
          {
            lat: x,
            lng: y
          }
      })
    //this allows the title to be viewed
    startMarker.showInfoWindow();
    //add the end point of the journey
    let endMarker: Marker = this.map.addMarkerSync(
      {
        title: title,
        icon: 'rgb(' + r + ',' + g + ',' + b + ')',
        animation: 'Drop',
        position:
          {
            lat: x1,
            lng: y1
          }
      })
    endMarker.showInfoWindow();
    let pointA: ILatLng = startMarker.getPosition();
    let pointB: ILatLng = endMarker.getPosition();
    //add a polyline between these two points to distinguish Journeys on the view
    this.map.addPolyline(
      {
        points: [pointA, pointB]
      }
    )
  }
  //function that returns a valid rgb value based on latlng
  convertRgb(x: number): number {
    //keep in range
    if (x < 0) {
      x = (x * x) + 20
    }
    else {
      x = x + 75
    }
    //keep in range
    if (x >= 255) {
      x -= 100;
    }
    return x;
  }
  //retrieves the information from the database
  //and stores it into an array for manipulation
  loadDocuments() {
    this.Journey.getJourney().subscribe(res => {
      this.markersToShow = res;
    });
  }
}