import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  detail: Product;
  products : Product[];

  constructor(
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(){
    console.log('hello')
    // return this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => { 
      // console.log(data)
      this.products= data
    })
  }

  delProduct(id){
    // console.log(id);
    // this.products = this.products.filter(product => product.id != id)
    // return this.products = this.productsService.removeProduct(id);
    this.productService.removeProduct(id).subscribe(data => this.products.filter(product => product.id != data.id)
    )
  }
  detailProduct(product){
    // return this.detail = this.productsService.detailProduct(product);
    this.productService.getProducts().subscribe(data => {
      // console.log(data)
      this.products= data
  })
  }
}