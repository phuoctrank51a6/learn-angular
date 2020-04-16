import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { SlideshowComponent } from './client/slideshow/slideshow.component';
// import { CategoryComponent } from './category/category.component';
// import { ListProductComponent } from './product/list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
// import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { ProductService } from './product.service';
// import { ProductAddComponent } from './product-add/product-add.component';
// import { EditProductComponent } from './edit-product/edit-product.component';
// import { DetailProductComponent } from './detail-product/detail-product.component';
import { from } from 'rxjs';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    // SlideshowComponent, 
    // CategoryComponent, 
    ItemProductComponent, 
    // ProductManagerComponent, 
    // ProductAddComponent, 
    // EditProductComponent, 
    // DetailProductComponent, 
    NotFoundComponent 
    ],
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    ClientModule,
    AdminModule, 
    AppRoutingModule, 
  ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
