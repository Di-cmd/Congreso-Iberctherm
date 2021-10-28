import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './components/autores/autores.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PreInscripcionComponent } from './components/pre-inscripcion/pre-inscripcion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'autores',
    component: AutoresComponent,
  },
  {
    path: 'evento',
    component: EventosComponent,
  },
  {
    path: 'pagos',
    component: PagosComponent,
  },
  {
    path: 'inscripcion',
    component: PreInscripcionComponent,
  },
  {
    path: 'ingreso',
    component: IngresoComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../context/context.module').then((m) => m.ContextModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContextRoutingModule {}
