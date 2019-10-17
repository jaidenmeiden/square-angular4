import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// Servicios
import {LugaresService} from "../../services/lugares.service";
//Importar datos con firebase
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lugaresHttp',
  templateUrl: './lugaresHttp.component.html',
  styleUrls: ['./lugaresHttp.component.css']
})
export class LugaresHttpComponent implements OnInit {

  private title = 'Platzi Square';
  public lat:number = 4.854492;//(Google Maps)
  public lng:number = -74.053045;//(Google Maps)
  private lugaresHttp: any;//Llamar con http
  private lugaresHttpFormateo: any;//Llamar con http

  constructor(
    private _lugaresHttpServices: LugaresService
  ) {
    console.log("Hola Http...");
    this._lugaresHttpServices.getLugaresHttp().subscribe(
      response => {
        const me = this;
        me.lugaresHttp = response;
        me.lugaresHttp = Object.keys(me.lugaresHttp).map(function(key) {
          return me.lugaresHttp[key];
        });
      }, error => {
        console.error(error);
      }
    );

    this._lugaresHttpServices.getLugaresHttpFormateo().subscribe(
      response => {
        const me = this;
        me.lugaresHttpFormateo = response['lugares'];
        me.lugaresHttpFormateo = Object.keys(me.lugaresHttpFormateo).map(function(key) {
          return me.lugaresHttpFormateo[key];
        });
      }, error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
