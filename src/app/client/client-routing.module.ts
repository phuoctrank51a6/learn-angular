import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ListProductComponent} from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LayoutComponent } from './layout/layout.component';

const clientRoutes: Routes =[
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {path: '', component:ListProductComponent},
      {path: 'product-detail/:id', component:DetailProductComponent}
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }