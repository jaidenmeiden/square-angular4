import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.isLogged();
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario logueado con exito!');
      }).catch((error) => {
      alert('Un error ha ocurrido');
      console.log(error);
    })
  };

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario registrado con exito!');
      }).catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      })
  };

  public isLogged() {
    return this.angularFireAuth.authState;
  }
}
