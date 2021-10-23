import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,

    children: [
      {
        
          path:'',
          loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule) 
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
