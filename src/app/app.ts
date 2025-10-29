import { Component, signal } from '@angular/core';
import { RouterLink,  RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona-component/persona-component';
import { AgendaComponent } from './agenda-component/agenda-component';
import { FormsModule } from '@angular/forms';
import { PersonaServicio } from './servicios/persona-servicio';
import { Agenda } from './models/agenda.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
      FormsModule, RouterLink, CommonModule], 
      // PersonaComponent, AgendaComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('interpolacion');
  tituloValor = this.titulo();
  nombre = '';
  agendas : Agenda [] = [];
  constructor (private personaServicio : PersonaServicio){
    this.nombre = this.personaServicio.obtenerNombrePersona();
    console.log(this.nombre);
    window.addEventListener('guardar-agenda',()=> {

      this.agendas = this.personaServicio.obtenerAgendas();
      console.log("ingreso al evento ", this.agendas);
    });

  }
  cambiarTitulo() {
      this.titulo.set('Esto es un nuevo titulo');
      console.log("ingreso a la funcion");

  }

  asignacionNombre(){
    this.personaServicio.cambiarNombre('Ruben');
    this.nombre = this.personaServicio.obtenerNombrePersona();
  }
}
