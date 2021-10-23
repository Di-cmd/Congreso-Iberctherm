import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';


//Importo el angular materials
import { MaterialsModule } from '../materials/materials.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    
  
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialsModule,
    SwiperModule
   
  
  ]
})
export class SharedModule {
  
 }
