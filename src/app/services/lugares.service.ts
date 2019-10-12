import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  lugares:any = [
    {id: 1 ,plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 2 ,plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 3 ,plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 4 ,plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre:'Sushi Suhiroll', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 5 ,plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 6 ,plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 7 ,plan: 'pagado', cercania: 1, distancia: 3, active: true, nombre:'Panadería de Chía', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 8 ,plan: 'pagado', cercania: 3, distancia: 90, active: true, nombre:'Bizcochería', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
  ];

  constructor(
    private afDB: AngularFireDatabase,
    public _http: HttpClient
  ) {
    console.log(this.lugares);
  }

  getLugares() {
    return this.afDB.list('lugares/').valueChanges();
  }

  buscarLugar(id) {
    return this.lugares.filter((lugar) => { return lugar.id = id})[0] || null;
  }

  guardarLugar(lugar) {
    console.log(lugar);
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?key=AIzaSyAxak2QXBI95W8cre6D1lEPgwsEv92w3kw&address=9-55+calle+72,+Bogota,Colombia
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=' + direccion);
  }
}
