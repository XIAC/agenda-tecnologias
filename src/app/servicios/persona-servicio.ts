import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { Agenda } from '../models/agenda.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicio {

  private nombrePersona = "esmeralda";
  private listaPersonas : Persona[] = [];
  private listaAgenda : Agenda [] = [];
  constructor() {}

  
  guardarPersona(persona : Persona) {
    this.listaPersonas.push({...persona});
    console.log("Persona Servicio:::",this.listaPersonas);
  }

  obtenerPersonas() : Persona [] {
    return this.listaPersonas;
  }

  obtenerNombrePersona() {
    return this.nombrePersona;
  }
  
  cambiarNombre(nombre: string) {
    this.nombrePersona = nombre;
  }
  
  guardarAgenda(agenda: Agenda) {
    console.log("objeto>>>>>",agenda);
    this.listaAgenda.push({...agenda});
    console.log("LISTA>>>>>",this.listaAgenda);
  }
  obtenerAgendas() : Agenda []
  {
    return  this.listaAgenda;
  }
}
