import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { EventosComponent } from './eventos/eventos.component';
import { PagosComponent } from './pagos/pagos.component';
import { MaterialsModule } from '../materials/materials.module';
import { PreInscripcionComponent } from './pre-inscripcion/pre-inscripcion.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroComponent } from './registro/registro.component';
import { SwiperModule } from 'swiper/angular';



// Importo un modelo:

@NgModule({
  declarations: [
    HomeComponent,
    AutoresComponent,
    EventosComponent,
    PagosComponent,
    PreInscripcionComponent,
    IngresoComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialsModule,
    SwiperModule
    
  ]
})
export class LayoutModule { }
