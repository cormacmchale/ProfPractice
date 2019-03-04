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
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(private data: JourneyService, private router:Router) { }
  getData:any[];
  addArray:[];
  ngOnInit()
  {
    this.loadDocuments();
  }

  loadDocuments()
  {
      this.data.getJourney().subscribe(res=>
        {
          this.getData=res      
        });
  }
  getUserJournies()
  {
    let user:any = this.data.getUser();
    let userName:string = user.email
    for (let myJournies of this.getData)
    {
      if(myJournies.payload.doc._document.proto.fields.name.stringValue == userName)
      {
         let startLat:number = myJournies.payload.doc._document.proto.fields.startlat.doubleValue
         let startLong:number = myJournies.payload.doc._document.proto.fields.startlong.doubleValue
         this.geoCoding(startLat,startLong)
      }
    }  
  }
  geoCoding(x:number,y:number)
  {
    Geocoder.geocode({
      position:{"lat":x,
                "lng":y
              }}).then((results: GeocoderResult[])=>
    {
      let location:string = results[0].country+","+results[0].adminArea+","+results[0].locality
      console.log(location)
    })
  }
}
