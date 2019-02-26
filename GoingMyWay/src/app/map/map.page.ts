import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, Marker, LatLng, ILatLng, GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { JourneyService } from 'src/app/journey.service';
import { dbInfo } from 'src/app/Journey';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  check:number;
  user:ILatLng;
  constructor(private journies:JourneyService, private router:Router) { }
  
  userLat:number=0;
  userLong:number=0;
  map:GoogleMap; 
  markersToShow:any[];

  ngOnInit() 
  {
    this.loadDocuments();  
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

  showJournies()
  {
    this.loadDocuments();
    if(this.markersToShow!=null)
    { 
      console.log(this.markersToShow);
      for (let info of this.markersToShow)
      {
        this.addMarkerFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue,info.payload.doc._document.proto.fields.endlong.doubleValue,info.payload.doc._document.proto.fields.startlat.doubleValue,info.payload.doc._document.proto.fields.startlong.doubleValue,info.payload.doc._document.proto.fields.name.stringValue)
        this.addPolylinesFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue,info.payload.doc._document.proto.fields.endlong.doubleValue,info.payload.doc._document.proto.fields.startlat.doubleValue,info.payload.doc._document.proto.fields.startlong.doubleValue);
        // console.log(info.payload.doc._document.proto.fields.endlat.doubleValue);
        // console.log(info.payload.doc._document.proto.fields.endlong.doubleValue);
        // console.log(info.payload.doc._document.proto.fields.startlat.doubleValue);
        // console.log(info.payload.doc._document.proto.fields.startlong.doubleValue);
      } 
    }
    else
    {
      console.log("No Data");
    }
  }
  //add polylines
  pointA:ILatLng;
  pointB:ILatLng;
  addPolylinesFromDatabase(x:number,y:number,x1:number,y1:number)
  {
    //console.log(x+" "+y+" "+x1+" "+y1);
    

  }
  //add markers from database
  addMarkerFromDatabase(x:number,y:number,x1:number,y1:number, title:string)
  {
    this.map.addMarker(
      {
        title:title+" End",
        icon:'Blue',
        animation: 'Drop',
        position:
         {
          lat:x,
          lng:y
        }
      }).then((marker:Marker)=>
      {
        marker.showInfoWindow();
        this.pointA = marker.getPosition();
      });
      this.map.addMarker(
        {
          title:title+" Start",
          icon:'Red',
          animation: 'Drop',
          position:
           {
            lat:x1,
            lng:y1
          }
        }).then((marker:Marker)=>
        {
          marker.showInfoWindow();
          this.pointB = marker.getPosition();
          this.map.addPolyline(
            {
              points:[this.pointA,this.pointB]
            }
          )
        }); 
  }
  visitMapPage()
  {
    this.router.navigate(['map']);
  }
  navigateJourneyPlanner(){
   this.router.navigate(['journey-planner']);
  }
  loadDocuments()
  {
    this.journies.getJourney().subscribe(res=>
      {
        this.markersToShow=res;
      });
  }
}
