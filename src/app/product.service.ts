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
  detailProduct(id: number){
    // console.log(id);
    const product = this.products.find(product => product.id == id);
    // console.log(product);
    if (product) {
      return product;
    } else {
      throw Error('Not Found');
    }
  }
  
  addProduct(product){
    // console.log(product);
    let length = this.products.length + 1;
    // console.log(length);
    let fakeObj = {id: length, ...product};
    this.products.push(fakeObj);
    // console.log(this.products);
  }
  updateProduct(product){
    // console.log(product);
    for(let i = 0;i < this.products.length; i++){
      if(this.products[i].id == product.id){
        // console.log(this.products[i]);
        this.products[i]=product;
      }
    }
    console.log(this.products)
  }

}