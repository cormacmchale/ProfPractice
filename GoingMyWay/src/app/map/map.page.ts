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


  constructor(private journies:JourneyService, private router:Router) { }
  
  map:GoogleMap; 
  pos:ILatLng = 
  {
    lat:43.087,
    lng:-90.38
  };
  posTwo:ILatLng = 
  {
    lat:43.087,
    lng:-99.38
  };
  addPos:ILatLng;

  markersToShow:any[];

  ngOnInit() {
    this.loadDocuments();
    this.map = GoogleMaps.create('Gmap');
  }
  addMarker()
  {
    this.map.addMarker(
      {
        icon:'Blue',
        position: this.posTwo
      });

      this.map.addMarker(
      {
        icon:'Red',
        position: this.pos
      });

  this.map.addPolyline(
         {
          points:[this.pos, this.posTwo]
         });
    
    console.log("marker added");
  }
  showJournies()
  {
    this.loadDocuments();
    if(this.markersToShow!=null)
    { 
      console.log(this.markersToShow);
      for (let info of this.markersToShow)
      {
        //this.pos.lat = info.payload.doc._document.proto.fields.lat.stringValue;
        //this.pos.lng = info.payload.doc._document.proto.fields.long.stringValue;
        this.addMarkerFromDatabase(info.payload.doc._document.proto.fields.lat.stringValue,info.payload.doc._document.proto.fields.long.stringValue,info.payload.doc._document.proto.fields.name.stringValue)
        //console.log("hello");
        //console.log(info.payload.doc._document.proto.fields.long.stringValue);
      } 
    }
    else
    {
      console.log("No Data");
    }
  }
  //add markers from database
  addMarkerFromDatabase(x:number,y:number, title:string)
  {
    this.map.addMarker(
      {
        title:title,
        icon:'Blue',
        animation: 'Drop',
        position:
         {
          lat:x,
          lng:y
        }
      });
  }
  checkStack()
  {
    this.router.navigate(['database']);
  }
  loadDocuments()
  {
    this.journies.getJourney().subscribe(res=>
      {
        this.markersToShow=res;
      });
  }
}
