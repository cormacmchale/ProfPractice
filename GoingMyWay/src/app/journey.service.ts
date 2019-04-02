import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { dbInfo } from './Journey';
import { Observable } from 'rxjs/internal/Observable';
import { ObservableInput } from 'rxjs';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class JourneyService {

  addJourney: dbInfo;
  private journies: AngularFirestoreCollection<any>;
  private journiesTwo: Observable<any[]>;

  constructor(database: AngularFirestore, private authentication: AngularFireAuth) {
    this.journies = database.collection<any>('journey');
  }
  getJourney() {
    this.journiesTwo = this.journies.snapshotChanges();
    return this.journiesTwo;
  }
  deleteJourney(journeyId: string) {
    this.journies.doc(journeyId).delete().then(function () {
      alert("Journey Deleted!");
    }).catch(function (error) {
      alert("Error removing document: " + error);
    });
  }
  sendJourney(startlong: number, startlat: number, endlong: number, endlat: number,
    name: string, startAddress: string, endAddress: string) {
    console.log(startAddress)
    console.log(endAddress)
    console.log(startlong + " " + startlat + " " + endlong + " " + endlat);
    this.addJourney = {
      startlong: startlong, startlat: startlat, endlong: endlong,
      endlat: endlat, name: name, startloc: startAddress, endloc: endAddress
    };
    this.journies.add(this.addJourney);
  }
  async userAuthentication(name: string, password: string) {
    try {
      const result = await this.authentication.auth.signInWithEmailAndPassword(name, password);
      if (result) {
        alert("Login Success!")
        console.log(result.user.email)
      }
    }
    catch (e) {
      let errorforUser: string = e.message;
      console.error(e.message);
      alert(errorforUser + "\n Login failed")
    }
  }

  async userRegister(name: string, password: string) {
    try {
      const result = await this.authentication.auth.createUserWithEmailAndPassword(name, password);
      if (result) {
        alert("Registration Success!")
      }
    }
    catch (e) {
      let errorforUser: string = e.message;
      console.error(e.message);
      alert(errorforUser + "\n Registration failed")
    }
  }
  getUser() {
    return this.authentication.auth.currentUser;
  }
  logUserOut() {
    return this.authentication.auth.signOut();
  }

}
