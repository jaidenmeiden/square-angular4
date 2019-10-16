import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
// Servicios
import {LugaresService} from "../../services/lugares.service";
//Importar datos con firebase
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimado', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent implements OnInit {

  private title = 'Platzi Square';
  public lat:number = 4.854492;//(Google Maps)
  public lng:number = -74.053045;//(Google Maps)
  private lugares: Observable<any[]>;
  state = 'inicial';

  constructor(
    private _lugaresServices: LugaresService
  ) {
    console.log("Hola Sockects...");
    this.iniciarCarga();
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  ngOnInit() {
  }

  iniciarCarga() {
    this.lugares = this._lugaresServices.getLugaresSockets();
  }
}
