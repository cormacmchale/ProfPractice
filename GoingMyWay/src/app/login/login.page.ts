import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private navParams: NavParams) {   }
  doLogin(){
      this.navCtrl.navigateRoot('MenuPage');
  }
  ngOnInit() {
  }

}
