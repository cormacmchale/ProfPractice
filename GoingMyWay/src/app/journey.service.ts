import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { dbInfo } from './Journey';
import { Observable } from 'rxjs/internal/Observable';
import { ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JourneyService {

 addJourney:dbInfo;
 private journies: AngularFirestoreCollection<any>;
 private journiesTwo: Observable<any[]>;

  constructor(database:AngularFirestore) 
  { 
    this.journies = database.collection<any>('journey');
    this.journiesTwo = this.journies.snapshotChanges();
  }

  getJourney()
  {
    return this.journiesTwo;
  }

  sendJourney(long:number, lat:number, name:string)
  {
    console.log(long+" "+lat+" "+name);
    this.addJourney = { long: long, lat: lat, name: name };
    this.journies.add(this.addJourney);
  }

}
