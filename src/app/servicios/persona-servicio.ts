import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicio {
  private nombrePersona = "esmeralda";
  constructor() {}

  obtenerNombrePersona() {
    return this.nombrePersona;
  }
  
  cambiarNombre(nombre: string) {
    this.nombrePersona = nombre;
  }
}
