import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//Components compartidos
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//Importo el angular materials
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
