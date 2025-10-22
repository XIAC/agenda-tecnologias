import { Routes } from '@angular/router';
import { App } from './app';
import { PersonaComponent } from './persona-component/persona-component';
import { AgendaComponent } from './agenda-component/agenda-component';

export const routes: Routes = [
    { path: '', component: App},
    { path: 'ver-persona', component: PersonaComponent  },
    { path: 'ver-agenda', component: AgendaComponent }
];
