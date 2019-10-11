import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// Servicios
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  private title = 'Platzi Square';
  public lat:number = 4.6560663;//(Google Maps)
  public lng:number = -74.0595918;//(Google Maps)
  private lugares: any = {};

  constructor(
    private _lugaresServices: LugaresService
  ) {
    this.lugares = _lugaresServices.getLugares();
  }

  ngOnInit() {
  }

}
