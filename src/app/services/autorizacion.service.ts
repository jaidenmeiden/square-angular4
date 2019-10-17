import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.isLogged();
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario logueado con exito!');
        this.router.navigate(['lugares']);
      }).catch((error) => {
      alert('Un error ha ocurrido');
      console.log(error);
    })
  };

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario registrado con exito!');
        console.log(response);
        this.router.navigate(['lugares']);
      }).catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      })
  };

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => {
        alert('Usuario logueado con facebook exitoso !');
        console.log(response);
        this.router.navigate(['lugares']);
      }).catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
    })
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['lugares']);
  }

  public getUser() {
    return this.angularFireAuth.auth;
  }
}
