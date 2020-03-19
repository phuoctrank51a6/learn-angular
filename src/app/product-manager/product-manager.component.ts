import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockProduct';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
  delProduct(id){
    // console.log(id);
    this.products = this.products.filter(product => product.id != id)
  }

}