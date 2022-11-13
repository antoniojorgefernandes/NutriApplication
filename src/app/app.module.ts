import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "../core/navbar/navbar.component";
import { ClientesComponent } from './clientes/clientes.component';
import {RouterModule, Routes} from "@angular/router";
import { ConsultasComponent } from './consultas/consultas.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
  },
  {
    path: 'alimentos',
    component: AlimentosComponent,
  },
  {
    path: 'consultas',
    component: ConsultasComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    ConsultasComponent,
    AlimentosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
