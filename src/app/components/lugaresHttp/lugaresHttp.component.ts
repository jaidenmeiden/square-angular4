import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
// Servicios
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'app-lugaresHttp',
  templateUrl: './lugaresHttp.component.html',
  styleUrls: ['./lugaresHttp.component.css'],
  animations: [
    trigger('contenedorAnimado', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(3000)),
      transition('final => inicial', animate(2000))
    ])
  ]
})
export class LugaresHttpComponent implements OnInit {

  private title = 'Platzi Square';
  public lat:number = 4.854492;//(Google Maps)
  public lng:number = -74.053045;//(Google Maps)
  private lugaresHttp: any;//Llamar con http
  private lugaresHttpFormateo: any;//Llamar con http
  state = 'inicial';

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
        this.state = (this.state === 'final') ? 'inicial' : 'final';
      }, error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
