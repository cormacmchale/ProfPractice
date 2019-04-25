import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(private data: JourneyService) { }
  //variables required by this page
  //Journeys from database stored
  getData: any[]
  //these variables are used to distinguish what user is using the app at the moment
  user: any
  userName: string

  ngOnInit() {
    //get the Journey documnet from the database first
    this.loadDocuments();
  }

  //loading all the Journey Documents in from the database for the User
  loadDocuments() {
    //all the information required by the app for mmanaging journies is collected here
    //onInit and manipulated in the html for the User
    this.user = this.data.getUser();
    this.userName = this.user.email
    this.data.getJourney().subscribe(res => {
      this.getData = res
    });
  }
  //function that will delete a document from the database based on the id that is passed into
  //it
  deleteJourney(documentId: string) {
    this.data.deleteJourney(documentId)
  }
}