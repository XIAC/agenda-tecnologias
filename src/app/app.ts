import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona-component/persona-component';
import { AgendaComponent } from './agenda-component/agenda-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
      FormsModule, RouterLink, RouterLinkActive,
      PersonaComponent, AgendaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('interpolacion');
  tituloValor = this.titulo();

  cambiarTitulo() {
      this.titulo.set('Esto es un nuevo titulo');
      console.log("ingreso a la funcion");
  }

}
