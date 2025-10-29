import { CommonModule } from '@angular/common';
import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../models/persona.model';
import { PersonaServicio } from '../servicios/persona-servicio';

@Component({
  selector: 'app-persona-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-component.html',
  styleUrl: './persona-component.css'
})
export class PersonaComponent {
  persona : Persona = {
    nombre: '',
    edad : null,
    direccion : ''
  }
  /**
   *
   */
  constructor(private personaServicio: PersonaServicio) {

  }
  guardarDatos(){
    this.personaServicio.guardarPersona(this.persona);
    console.log("se guardaron los datos", this.persona);
    alert(`Se registro exitosamente: ${this.persona.nombre}`);
    this.persona = {nombre: '', edad: null, direccion:''};
  }
}
