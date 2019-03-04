import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { dbInfo } from 'src/app/Journey';
import { Router } from '@angular/router';
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

}
