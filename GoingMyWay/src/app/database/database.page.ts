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
    this.data.getJourney().subscribe(res=>
    {
      this.getData=res;
    })
  }

  //variables on Page
  Long;
  Lat;
  name;
  displayData:string;

  //display this
  answer:string;

  displayPosition()
  {
    //display this on page
    //this.answer = this.Long+this.Lat+" "+this.name;
      this.data.getJourney().subscribe(res=>
      {
        this.getData=res;
      })

      console.log(this.getData);      
  }

  testSend()
  {
    this.data.sendJourney(this.Long,this.Lat,this.name);
    this.ngOnInit();
  }
  checkStack()
  {
    this.router.navigate(['map']);
  }

}
