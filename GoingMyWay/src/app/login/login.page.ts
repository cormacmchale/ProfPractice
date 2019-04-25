import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables databound to entrys from user to login/register to the app
  userName: string;
  eMail: string;
  result: any;
  resultLogin:any;
  //service and router required here
  constructor(private signIn: JourneyService, private router: Router) { }

  ngOnInit() {
  }
  //the login method if it returns true with no error will log the user in
  //alert them of this and redirect them to the home page
  //calls methods from service
  //trying to go back to homepage after login but not working
  async login() {
    if (await this.signIn.userAuthentication(this.userName, this.eMail))
    {
      this.router.navigate(['home']);
    }
  }
  //register the same as login with similar error handling but for registering a User
  register() {
    this.signIn.userRegister(this.userName, this.eMail);
  }

  //allows user to logout - stops connection between user and database
  logOut() {
    this.result = this.signIn.logUserOut();
  }
  //this method can be called to see if anyone is logged in from the current device
  //result is returned as null if no-one is logged in
  //can be used whenever needed to get the username
  checkUser() {
    this.result = this.signIn.getUser();
    if (!this.result) {
      alert("No one logged in")
    }
  }

}
