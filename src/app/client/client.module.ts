import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {ListProductComponent} from './list-product/list-product.component';
import { ClientRoutingModule } from './client-routing.module';
import { CategoryComponent } from './category/category.component';
import { LayoutComponent } from './layout/layout.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [ 
    ListProductComponent, 
    LayoutComponent,
    SlideshowComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
})
export class ClientModule { }