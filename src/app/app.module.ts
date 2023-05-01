import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { IndexComponent } from './component/index/index.component';
import { PresentacionComponent } from './component/presentacion/presentacion.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { EstilosComponent } from './component/estilos/estilos.component';
import { FormacionComponent } from './component/formacion/formacion.component';
import { FormsModule } from '@angular/forms';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { BotonvermasComponent } from './component/botonvermas/botonvermas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    PresentacionComponent,
    PerfilComponent,
    EstilosComponent,
    FormacionComponent,
    HabilidadesComponent,
    BotonvermasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
