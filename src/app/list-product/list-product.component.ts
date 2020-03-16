import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockProduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = data;
  constructor() {}

  ngOnInit(): void {}
  selected: Product;
  removeIttem(id){
    console.log(id);
    this.products = this.products.filter(product => product.id != id);
  }
  detailProduct(product){
    this.selected =product;
  }
}
