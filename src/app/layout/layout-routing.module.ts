import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PagosComponent } from './pagos/pagos.component';
import{PreInscripcionComponent } from './pre-inscripcion/pre-inscripcion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }, 
  {
    path:'autores',
    component:AutoresComponent
  }, 
  {
    path:'evento',
    component:EventosComponent
  }, 
  {
    path:'pagos',
    component:PagosComponent
  
}, 
{
  path:'inscripcion',
  component:PreInscripcionComponent 
}, 
{
  path:'ingreso',
  component:IngresoComponent
}, 
{
  path:'registro',
  component:RegistroComponent
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
