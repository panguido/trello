import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    UsuarioComponent,
    ProyectosComponent,
    TareasComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
