import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
//Se importan las directivas personalizadas para poderlas usar
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
//Se importan el componente donde se incluyeron los ejemplos anteriores
import { DirectivasComponent } from './components/directivas/directivas.component';
import {RouterModule, Routes} from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import {LugaresHttpComponent} from './components/lugaresHttp/lugaresHttp.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './components/crear/crear.component';
import {HttpClientModule} from "@angular/common/http";
import { EditarComponent } from './components/editar/editar.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'lugaresHttp', component: LugaresHttpComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'editar/:id', component: EditarComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyAxak2QXBI95W8cre6D1lEPgwsEv92w3kw",
  authDomain: "platzisquare-79f58.firebaseapp.com",
  databaseURL: "https://platzisquare-79f58.firebaseio.com",
  storageBucket: "platzisquare-79f58.appspot.com",
  messagingSenderId: "597178879899"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DirectivasComponent,
    DetalleComponent,
    LugaresComponent,
    LugaresHttpComponent,
    ContactoComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
