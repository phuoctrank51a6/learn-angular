import { Injectable } from '@angular/core';
import { Product } from './Product';
import { data } from './MockProduct';


@Injectable()
export class ProductService {
  detail: Product;
  products = data;

  constructor() { }
  getProducts(){
    return this.products;
  }
  removeProduct(id){
    // console.log(id);
    return this.products = this.products.filter(product => product.id != id);
    // console.log(this.products);
  }
  detailProduct(product){
    return this.detail =product;
  }
  
  addProduct(product){
    // console.log(product);
    let length = this.products.length + 1;
    // console.log(length);
    let fakeObj = {id: length, ...product};
    this.products.push(fakeObj);
    // console.log(this.products);
  }

}