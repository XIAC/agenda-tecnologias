import { CommonModule } from '@angular/common';
import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-component.html',
  styleUrl: './persona-component.css'
})
export class PersonaComponent {
  persona = {
    nombre: '',
    edad : null,
    direccion : ''
  }
  guardarDatos(){
    console.log("se gaurdaron los datos", this.persona);
    alert('Se registro exitosamente');
  }
}
