import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { Router } from '@angular/router';
import { Geocoder, GeocoderResult } from '@ionic-native/google-maps/ngx';
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
import { ArrayType } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(private data: JourneyService, private router:Router) { }
  getData:any[];
  user:any
  userName:string
  ngOnInit()
  {
    this.loadDocuments();
  }

  loadDocuments()
  {
    this.user = this.data.getUser();
    this.userName= this.user.email
      this.data.getJourney().subscribe(res=>
        {
          this.getData=res      
        });
  }
  getUserJournies()
  {
    this.loadDocuments();
    // for (let myJournies of this.getData)
    // {
    //      let startLat:number = myJournies.payload.doc._document.proto.fields.startlat.doubleValue
    //      let startLong:number = myJournies.payload.doc._document.proto.fields.startlong.doubleValue
    //      this.geoCoding(startLat,startLong)        
    // }  
  }
  //possibly dont need this yet
  geoCoding(x:number,y:number)
  {
    Geocoder.geocode({
      position:
      {"lat":x,
       "lng":y
              }}).then((results: GeocoderResult[])=>
       {
      let location:string = results[0].country+","+results[0].adminArea+","+results[0].locality
      console.log(location)
    })
  }
  deleteJourney(x:string)
  {
    this.data.deleteJourney(x)
  }
}
