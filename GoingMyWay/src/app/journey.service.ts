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
  }

  getJourney()
  {
    this.journiesTwo = this.journies.snapshotChanges();
    return this.journiesTwo;
  }

  sendJourney(startlong:number, startlat:number, endlong:number, endlat:number, name:string)
  {
    console.log(startlong+" "+startlat+" "+endlong+" "+endlat);
    this.addJourney = { startlong: startlong, startlat: startlat, endlong:endlong, endlat:endlat, name: name};
    this.journies.add(this.addJourney);
  }

}
