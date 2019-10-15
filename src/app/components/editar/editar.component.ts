import { Component, OnInit } from '@angular/core';
import {Lugar} from "../../models/lugar";
import {LugaresService} from "../../services/lugares.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private id = null;
  public lugar: Lugar;

  constructor(
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id'];
    this._lugaresServices.getLugar(this.id)
      .subscribe((lugar: any) => {
        this.lugar = lugar;
      });
  }

  ngOnInit() {
  }

  editarLugar() {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this._lugaresServices.obtenerGeoData(direccion)
      .subscribe((response: any) => {
        if(typeof response.results[0] !== "undefined") {
          this.lugar.lat = response.results[0].geometry.location.lat;
          this.lugar.lng = response.results[0].geometry.location.lng;

          this._lugaresServices.editarLugar(this.lugar);
          alert("Información editado con exito!");
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
      });
  }

}
