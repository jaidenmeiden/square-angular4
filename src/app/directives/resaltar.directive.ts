import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";//Se inyectan clases necesarias
//Se incluye a traves de 'Directive' el selector de la directiva personalizada y va a ser una directiva de atributo
@Directive({
    selector: '[resaltar]'
})
//Se exporta la clase para poderla usuar fuera del archivo
export class ResaltarDirective implements OnInit{
    constructor(
      private elRef: ElementRef, //Permite crear una referencia de HTML que se puede manipular en TypeScript
      private renderer: Renderer2 //Perimite manipular los elementos de HTML pero desde CSS
    ){}
    @Input('resaltar') plan: string = ''; //Se declara la variable plan tipo @Imput referenciando al selector definido 'resaltar'
    ngOnInit(){
        if(this.plan === 'pagado'){//Se obntiene el elemento donde se va a aplicar el atributo
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}
