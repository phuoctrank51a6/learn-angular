import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  detail: Product;
  products : Product[];

  constructor(
    private productsService : ProductService
    ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(){
    return this.products = this.productsService.getProducts();
  }

  delProduct(id){
    // console.log(id);
    // this.products = this.products.filter(product => product.id != id)
    return this.products = this.productsService.removeProduct(id);
  }
  detailProduct(product){
    return this.detail = this.productsService.detailProduct(product);
  }

}