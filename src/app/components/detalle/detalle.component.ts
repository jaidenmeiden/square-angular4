import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares:any = [
    {id: 1 ,plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
    {id: 2 ,plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
    {id: 3 ,plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
    {id: 4 ,plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
    {id: 5 ,plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
    {id: 6 ,plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'},
    {id: 7 ,plan: 'pagado', cercania: 1, distancia: 3, active: true, nombre:'Panadería de Chía'},
    {id: 8 ,plan: 'pagado', cercania: 3, distancia: 90, active: true, nombre:'Bizcochería'}
  ];
  id = null;
  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
}

  ngOnInit() {
  }

  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id = this.id})[0] || null;
  }
}
