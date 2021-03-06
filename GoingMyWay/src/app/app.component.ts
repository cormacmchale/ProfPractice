import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from 'src/app/home/home.page';
import { LoginPage } from 'src/app/login/login.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //this functions as the sidebar menu for a tabbed layout
  //this app menu will be displayed for the user in the sidebar using a for loop and the 
  //variable to display information
  public appMenu = [
    { title: "Home", url: '/home', icon: 'home', pathMatch: 'full' },
    { title: "Plan a Journey", url: '/journey-planner', icon: 'add', pathMatch: 'full' },
    { title: "Map", url: '/map', icon: 'map', pathMatch: 'full' },
    { title: "Login/Register", url: '/login', icon: 'happy', pathMatch: 'full' },
    { title: "Manage Journies", url: '/database', icon: 'trash', pathMatch: 'full' }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
