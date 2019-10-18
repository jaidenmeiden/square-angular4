import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  API_ENDPOINT = 'https://platzisquare-79f58.firebaseio.com';
  MAP_KEY = 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0';

  constructor(
    private afDB: AngularFireDatabase,
    public _http: HttpClient
  ) {

  }

  getLugaresSockets() {
    return this.afDB.list('lugares/').valueChanges();
  }

  getLugaresHttp() {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.API_ENDPOINT + '/lugares.json', {headers:headers});
  }

  getLugaresHttpFormateo() {
    return this._http.get(this.API_ENDPOINT + '/.json');
  }

  guardarLugarSockets(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  guardarLugarHttp(lugar) {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers:headers});
  }

  editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=9-55+calle+72,+Bogota,Colombia
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.MAP_KEY + '&address=' + direccion);
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id).valueChanges();
  }
}
