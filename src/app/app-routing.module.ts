import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListProductComponent},
  { path: 'product-manager', component: ProductManagerComponent},
  { path: 'add-product' ,component: ProductAddComponent},
  { path: '**', component: ListProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
