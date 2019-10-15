import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  API_ENDPOINT = 'https://platzisquare-79f58.firebaseio.com';

  constructor(
    private afDB: AngularFireDatabase,
    public _http: HttpClient
  ) {

  }

  getLugares() {
    return this.afDB.list('lugares/').valueChanges();
  }

  guardarLugarSockets(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  guardarLugarHttp(lugar) {
    const headers = new Headers({"Content-Type":"application/json"});
    return this._http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers:headers});
  }

  editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=9-55+calle+72,+Bogota,Colombia
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=' + direccion);
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id).valueChanges();
  }
}
