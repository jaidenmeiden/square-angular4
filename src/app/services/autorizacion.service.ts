import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  public login = (email, password) => {
    console.log('Método login!');
  };

  public registro = (email, password) => {
    console.log('Método registro!');
  };

  constructor() { }
}
