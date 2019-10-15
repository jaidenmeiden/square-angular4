import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// Servicios
import {LugaresService} from "../../services/lugares.service";
//Importar datos con firebase
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  private title = 'Platzi Square';
  public lat:number = 4.854492;//(Google Maps)
  public lng:number = -74.053045;//(Google Maps)
  private lugares: Observable<any[]>;

  constructor(
    private _lugaresServices: LugaresService
  ) {
    console.log("Hola...");
    this.lugares = this._lugaresServices.getLugares();
  }

  ngOnInit() {
  }

}
