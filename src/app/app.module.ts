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
import { ProyectoService  } from './proyecto.service';
import { TareaService } from './tarea.service';
import { TableroService  } from './tablero.service';
import { UsuarioService } from './usuario.service';
import { UsuarioDetalleService } from './usuario-detalle.service';
import {AppRoutingModule  } from './app-routing.module';
import { DragulaModule } from 'ng2-dragula';


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
    AppRoutingModule,
    HttpModule,
    DragulaModule
  ],
  providers: [UsuarioService,TableroService,ProyectoService,TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
