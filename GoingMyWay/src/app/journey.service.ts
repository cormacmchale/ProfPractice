import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import for sending a Journey
//used as an object to populate to send to database
import { dbInfo } from './Journey';
import { Observable } from 'rxjs/internal/Observable';
import { ObservableInput } from 'rxjs';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class JourneyService {

  //JourneyObject
  addJourney: dbInfo;
  //used to make connection to the database
  private journies: AngularFirestoreCollection<any>;
  //used to return any chnages maade to the database to the app in an observable array
  private journiesTwo: Observable<any[]>;
  //constructor of the service
  constructor(database: AngularFirestore, private authentication: AngularFireAuth) {
    //establish connection here
    this.journies = database.collection<any>('journey');
  }


  //CRUD METHODS
  //method for returning all of the Journeys in the database to the page for the User
  getJourney() {
    this.journiesTwo = this.journies.snapshotChanges();
    return this.journiesTwo;
  }
  //takes in the id of a document as a parameter and deletes it from the collection
  deleteJourney(journeyId: string) {
    this.journies.doc(journeyId).delete().then(function () {
      alert("Journey Deleted!");
    }).catch(function (error) {
      alert("Error removing document: " + error);
    });
  }
  //takes all the parameters for Journey adds them into a Journey object
  sendJourney(startlong: number, startlat: number, endlong: number, endlat: number,
    name: string, startAddress: string, endAddress: string) {
    //create object here - imported from Journey.ts
    this.addJourney = {
      startlong: startlong, startlat: startlat, endlong: endlong,
      endlat: endlat, name: name, startloc: startAddress, endloc: endAddress
    };
    //adds the object as a document to the collection
    this.journies.add(this.addJourney);
  }
  //CRUD METHODS

  //AUTHENTICATION METHODS
  //sign in method
  //this method takes in an email and password as parameters
  //asynchronously returns the result
  //if successful then alert the user of the login 
  async userAuthentication(email: string, password: string) {
    try {
      const result = await this.authentication.auth.signInWithEmailAndPassword(email, password);
      if (result) {
        alert("Login Success!")
      }
    }
    //if there is any error then alert the user
    catch (e) {
      let errorforUser: string = e.message;
      alert(errorforUser + "\n Login failed")
    }
  }
  //register as a user method
  //this method takes in an email and password as parameters
  //asynchronously returns the result 
  async userRegister(name: string, password: string) {
    try {
      const result = await this.authentication.auth.createUserWithEmailAndPassword(name, password);
      if (result) {
        alert("Registration Success!")
      }
    }
    //if there is any error then alert the user - password validation
    catch (e) {
      let errorforUser: string = e.message;
      alert(errorforUser + "\n Registration failed")
    }
  }
  //useful methods for the app
  //this allows the app to get the users name and use it to identify who save the Journey
  getUser() {
    return this.authentication.auth.currentUser;
  }
  //allow a user to logout
  //will add a red logout button somewhere in the app for this
  logUserOut() {
    return this.authentication.auth.signOut();
  }
  //AUTHENTICATION METHODS
}
