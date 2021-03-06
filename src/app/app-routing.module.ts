import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { ServiceComponent } from './service/service.component';
// import { DetailProductComponent } from './detail-product/detail-product.component';
// import { ProductAddComponent } from './product-add/product-add.component';
// import { EditProductComponent } from './edit-product/edit-product.component';
// import { ListProductComponent } from './product/list-product/list-product.component';
// import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  // { path: 'home', component: ListProductComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'service' ,component: ServiceComponent},
  // { path: 'product-manager', component: ProductManagerComponent},
  // { path: 'add-product' ,component: ProductAddComponent},
  // { path: 'edit-product/:id' ,component: EditProductComponent},
  // { path: 'detail-product/:id' ,component: DetailProductComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
