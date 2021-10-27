import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContextRoutingModule } from './context-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { AutoresComponent } from './components/autores/autores.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PreInscripcionComponent } from './components/pre-inscripcion/pre-inscripcion.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [
    HomeComponent,
    EventosComponent,
    PagosComponent,
    AutoresComponent,
    IngresoComponent,
    RegistroComponent,
    PreInscripcionComponent,
  ],
  imports: [CommonModule, ContextRoutingModule, MaterialsModule],
})
export class ContextModule {}
