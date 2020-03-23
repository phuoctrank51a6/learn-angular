import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CategoryComponent } from './category/category.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SlideshowComponent, CategoryComponent, ListProductComponent, ItemProductComponent, ProductManagerComponent, ProductAddComponent, EditProductComponent, AboutComponent, ServiceComponent, DetailProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
