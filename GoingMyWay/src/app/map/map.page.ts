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
  user:any;
  constructor(private journies:JourneyService, private router:Router) { }

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
    //setTimeout(this.showJournies(), 2000);
  }//loadMap()

  showJournies()
  {
    if(!this.journies.getUser())
    {
      alert("Please Log in to view Journies")
    }
    else
    {
      //this.loadDocuments();
      if(this.markersToShow!=null)
      { 
        console.log(this.markersToShow);
        for (let info of this.markersToShow)
        {
          this.addMarkerFromDatabase(
            info.payload.doc._document.proto.fields.endlat.doubleValue,
            info.payload.doc._document.proto.fields.endlong.doubleValue,
            info.payload.doc._document.proto.fields.startlat.doubleValue,
            info.payload.doc._document.proto.fields.startlong.doubleValue,
            info.payload.doc._document.proto.fields.name.stringValue)
          //this.addPolylinesFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue,info.payload.doc._document.proto.fields.endlong.doubleValue,info.payload.doc._document.proto.fields.startlat.doubleValue,info.payload.doc._document.proto.fields.startlong.doubleValue);
        } 
      }
      else
      {
        console.log("No Data");
      }
    }
  }
  //add markers from database
  addMarkerFromDatabase(x:number,y:number,x1:number,y1:number, title:string)
  {
    let r: number = this.convertRgb(x)
    let g: number = this.convertRgb(y)
    let b: number = this.convertRgb(x1)
    //adding different logic
        let startMarker: Marker = this.map.addMarkerSync(
          {
            title: title,
            icon: 'rgb('+r+','+g+','+b+')',
            animation: 'Drop',
            position: 
            {
              lat:x,
              lng:y
            }
          })
          startMarker.showInfoWindow();
        let endMarker: Marker = this.map.addMarkerSync(
          {
              title: title,
              icon: 'rgb('+r+','+g+','+b+')',
              animation: 'Drop',
              position: 
              {
                lat:x1,
                lng:y1
              }
          })
          endMarker.showInfoWindow();
        let pointA: ILatLng = startMarker.getPosition();
        let pointB: ILatLng = endMarker.getPosition();
        this.map.addPolyline(
          {
            points:[pointA,pointB]
          }
        )
    }
  convertRgb(x:number):number
  {
    //keep in range
    if(x<0)
    {
      x = (x*x) + 20     
    }
    else
    {
      x=x+75
    }
        //keep in range
        if(x>=255)
        {
          x-=100;
        }
    return x;
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
      console.log(this.markersToShow)
  }


  //not working, may not implement
  myLocation()
  {
    this.user = this.journies.getlocation();
    console.log(this.user)
    console.log(this.user.coords.latitude)
    //console.log(this.user[0].__zone_symbol__value.coords.longitude)
  }
  findUser()
  {
    this.map.setOptions(
      {
        target: {
          lat: this.user[0].__zone_symbol__value.coords.latitude,
          lng: this.user[0].__zone_symbol__value.coords.longitude
        }
      }
    )
  }
}