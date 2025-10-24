import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [ReactiveFormsModule],
  templateUrl: './agenda-component.html',
  styleUrl: './agenda-component.css'
})
export class AgendaComponent  {
  agendaForm!: FormGroup;
  
  constructor(private fb : FormBuilder) {}
  ngOnInit() : void {
    this.agendaForm = this.fb.group({
      telefono: [''],
      correo: ['', [Validators.required, Validators.email]]
    })
  }

  guardarAgenda(){
    if( this.agendaForm.valid) {
      console.log("ageda guardada", this.agendaForm.value);
      alert("se guardo la agenda correctamente");
    }
  }
}
