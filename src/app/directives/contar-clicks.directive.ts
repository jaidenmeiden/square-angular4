import {Directive, HostListener} from "@angular/core";
//Se incluye a traves de 'Directive' el selector de la directiva personalizada y va a ser una directiva de atributo
@Directive({
  selector: 'a[contar-clicks]'//La 'a' al principio determina que solo aplica a hipervinculos
})
//Se exporta la clase para poderla usuar fuera del archivo
export class ContarClicksDirective {
  clickN = 0;//Lleva el conteo de los clicks
  //El HostListener permite escuchar los eventos. Recibe: 1. Evento, 2. Un arreglo con el target
  @HostListener('click', ['$event.target']) onClick(btn) {//El evento se dispara en un onClick
    console.log('a', btn, "Número de clicks: ", this.clickN++);
  }
}
