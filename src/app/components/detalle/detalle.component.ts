import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Servicios
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  private id = null;
  private lugar: any = {};
  private lugares: any = {};

  constructor(
    private route: ActivatedRoute,
    private _lugaresServices: LugaresService
  ) {
    this.lugares = this._lugaresServices.getLugares();
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this._lugaresServices.buscarLugar(this.id);
  }

  ngOnInit() {
  }
}
