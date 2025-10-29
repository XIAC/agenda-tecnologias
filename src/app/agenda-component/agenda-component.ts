import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Agenda } from '../models/agenda.model';
import { PersonaServicio } from '../servicios/persona-servicio';

@Component({
  selector: 'app-agenda',
  imports: [ReactiveFormsModule],
  templateUrl: './agenda-component.html',
  styleUrl: './agenda-component.css'
})
export class AgendaComponent  {
  agendaForm!: FormGroup;
  agendas: Agenda[] =[];
  constructor(private fb : FormBuilder, private personaServicio : PersonaServicio) {}
  ngOnInit() : void {
    this.agendaForm = this.fb.group({
      telefono: [''],
      correo: ['', [Validators.required, Validators.email]]
    })
  }

  guardarAgenda(){
    if( this.agendaForm.valid) {
      const persona = this.personaServicio.obtenerPersonas().slice(-1)[0];
      console.log("Ulltima Persona:::", persona);
      console.log("ageda guardada", this.agendaForm.value);
      const unionDatos = {
        ...this.agendaForm.value, persona: persona
      }
      this.personaServicio.guardarAgenda(unionDatos);
      console.log("UNIFICACION", unionDatos);
      this.agendaForm.reset();
      alert("se guardo la agenda correctamente");
    }
    window.dispatchEvent(new CustomEvent('guardar-agenda'));
  }
}
