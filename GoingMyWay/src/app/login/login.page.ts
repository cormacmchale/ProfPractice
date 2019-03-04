import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName:string;
  eMail:string;
  result:any;

  constructor(private signIn:JourneyService, private router:Router) {   }

  ngOnInit() {
  }
  login()
  {
    this.signIn.userAuthentication(this.userName, this.eMail);
    //console.log(this.signIn.result)
  }
  register()
  {
    this.signIn.userRegister(this.userName,this.eMail);
  }
  logOut()
  {
    this.result = this.signIn.logUserOut();
    console.log(this.result)
  }
  checkUser()
  {
    this.result = this.signIn.getUser();
    console.log(this.result)
  }

}
