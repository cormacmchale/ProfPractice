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

@Component({
  selector: 'app-journey-planner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage implements OnInit {
  map: GoogleMap;
  source: ILatLng;
  target: ILatLng;
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
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDQUaBvR0ZXMXsn-sPP6qhPw-qGFYmsTMs',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDQUaBvR0ZXMXsn-sPP6qhPw-qGFYmsTMs'
    // });
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


    let marker: Marker = this.map.addMarkerSync({
      title: "A",
      icon: 'Blue',
      position: this.posA,
      draggable: true,
    });
    let marker2: Marker = this.map.addMarkerSync({
      title: "B",
      icon: 'Red',
      position: this.posB,
      draggable: true,
    });


    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.source = marker.getPosition();
      this.target = marker2.getPosition();
      this.showPosition(this.source.lat, this.source.lng, this.target.lat, this.target.lng)
    });
  }//loadMap()

  showPosition(x1: number, y1: number, x2: number, y2: number) {
    console.log("marker A: " + x1 + " " + y1 + " marker B " + x2 + " " + y2);

  }
}