import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { Router } from '@angular/router';
import { Geocoder, GeocoderResult } from '@ionic-native/google-maps/ngx';
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(private data: JourneyService, private router:Router) { }
  getData:any[];
  ngOnInit()
  {
    this.loadDocuments();
  }

  loadDocuments()
  {
    this.data.getJourney().subscribe(res=>
      {
        this.getData=res;
      });
      console.log(this.getData); 
  }
  getUserJournies()
  {
    this.loadDocuments();
    
  }

}
