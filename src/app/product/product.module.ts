import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ListProductComponent} from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ 
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }