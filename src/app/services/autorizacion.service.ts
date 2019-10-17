import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  public login = (email, password) => {
    console.log('Método login!');
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
}
