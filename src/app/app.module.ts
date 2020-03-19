import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CategoryComponent } from './category/category.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideshowComponent, CategoryComponent, ListProductComponent, ItemProductComponent, ProductManagerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
