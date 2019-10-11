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
      '',
      '',
      true,
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  ngOnInit() {
  }

  guardarLugar() {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this._lugaresServices.obtenerGeoData(direccion)
      .subscribe((result: any) => {
        this.lugar.lat = result.results[0].geometry.location.lat;
        this.lugar.lng = result.results[0].geometry.location.lng;

        this.lugar.id = Date.now();
        this._lugaresServices.guardarLugar(this.lugar);
        alert("Información almacenada con exito!");
        this.lugar = new Lugar(
          0,
          '',
          '',
          '',
          true,
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        );
      });
  }

}
