import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, Marker, LatLng, ILatLng } from '@ionic-native/google-maps/ngx';
import { JourneyService } from 'src/app/journey.service';
import { dbInfo } from 'src/app/Journey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  check:number;
  constructor(private journies:JourneyService, private router:Router) { }
  
  map:GoogleMap; 
  markersToShow:any[];

  ngOnInit() {
    this.loadDocuments();   
    this.map = GoogleMaps.create('Gmap');
  }
  showJournies()
  {
    this.loadDocuments();
    if(this.markersToShow!=null)
    { 
      console.log(this.markersToShow);
      for (let info of this.markersToShow)
      {
        this.addMarkerFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue,info.payload.doc._document.proto.fields.endlong.doubleValue,info.payload.doc._document.proto.fields.startlat.doubleValue,info.payload.doc._document.proto.fields.startlong.doubleValue,info.payload.doc._document.proto.fields.name.stringValue)
        //console.log("hello");
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
