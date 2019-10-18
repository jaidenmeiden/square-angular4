import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from "../../services/autorizacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login:any = {};

  constructor(
    private autorizacionService: AutorizacionService
  ) {

  }

  ngOnInit() {

  }

  loguear() {
    this.autorizacionService.login(this.login.email, this.login.password);
  }

  loguearFacebook() {
    this.autorizacionService.facebookLogin();
  }

  loguearTwitter() {
    this.autorizacionService.twitterLogin();
  }

}
