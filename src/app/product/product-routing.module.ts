import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ListProductComponent} from './list-product/list-product.component';

const productRoutes: Routes =[
  { path: 'list', component: ListProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }