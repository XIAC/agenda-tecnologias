import { Component, signal } from '@angular/core';
import { RouterLink,  RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona-component/persona-component';
import { AgendaComponent } from './agenda-component/agenda-component';
import { FormsModule } from '@angular/forms';
import { PersonaServicio } from './servicios/persona-servicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
      FormsModule, RouterLink ], 
      // PersonaComponent, AgendaComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('interpolacion');
  tituloValor = this.titulo();
  nombre = '';
  constructor (private personaServicio : PersonaServicio){
    this.nombre = this.personaServicio.obtenerNombrePersona();
    console.log(this.nombre);

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
