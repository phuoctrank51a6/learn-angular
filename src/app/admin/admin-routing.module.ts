import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ProductManagerComponent} from './product-manager/product-manager.component';
import { LayoutComponent } from './layout/layout.component';

const adminRoutes: Routes =[
  { path: 'product-manager', component: ProductManagerComponent },
  { path: 'layout', component: LayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }