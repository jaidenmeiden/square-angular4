//Se importan los modulos necesarios
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//Se importan las directivas personalizadas para poderlas usar
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

//Se importan el guardia
import {MiguardiaGuard} from "./guards/miguardia.guard";

//Se importan los pipes necesarios
import {LinkifystrPipe} from './pipes/linkifystr.pipe';

//Se imporrtan los servicios
import {LugaresService} from "./services/lugares.service";
import {AutorizacionService} from "./services/autorizacion.service";

//Se importan el componentes donde se incluyeron los ejemplos anteriores
import {DirectivasComponent} from './components/directivas/directivas.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import {DetalleComponent} from './components/detalle/detalle.component';
import {LugaresComponent} from './components/lugares/lugares.component';
import {LugaresHttpComponent} from './components/lugaresHttp/lugaresHttp.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {CrearComponent} from './components/crear/crear.component';
import {EditarComponent} from './components/editar/editar.component';
import {AnimacionComponent} from './components/animacion/animacion.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'animacion', component: AnimacionComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'lugaresHttp', component: LugaresHttpComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent, canActivate:[MiguardiaGuard]},
  {path: 'editar/:id', component: EditarComponent, canActivate:[MiguardiaGuard]}
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
    LoginComponent,
    RegistroComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LinkifystrPipe,
    DirectivasComponent,
    DetalleComponent,
    LugaresComponent,
    LugaresHttpComponent,
    ContactoComponent,
    CrearComponent,
    EditarComponent,
    AnimacionComponent
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
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    MiguardiaGuard,
    AngularFireDatabase,
    LugaresService,
    AutorizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
