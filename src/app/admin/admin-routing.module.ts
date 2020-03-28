import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ProductManagerComponent} from './product-manager/product-manager.component';
import { LayoutComponent } from './layout/layout.component';

const adminRoutes: Routes =[
  { 
    path: 'admin', 
    component: LayoutComponent,
    children: [
      { path: '', component: ProductManagerComponent }
    ]
     },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }