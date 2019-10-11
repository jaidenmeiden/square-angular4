import { Component, OnInit } from '@angular/core';
import {Lugar} from "../../models/lugar";
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public lugar: Lugar;

  constructor(
    private _lugaresServices: LugaresService
  ) {
    this.lugar = new Lugar(
      0,
      '',
      null,
      null,
      true,
      '',
      ''
    );
  }

  ngOnInit() {
  }
  guardarLugar() {
    this._lugaresServices.guardarLugar(this.lugar);
  }

}
