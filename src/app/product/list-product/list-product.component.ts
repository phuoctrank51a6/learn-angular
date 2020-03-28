import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { data } from '../../MockProduct';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  detail: Product;
  products : Product[];
  constructor(
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getProducts();
    }
  selected: Product;
  
  getProducts(){
    console.log('hello')
    // return this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => { 
      // console.log(data)
      this.products= data
    })
  }
  removeIttem(id){
    console.log(id);
    this.products = this.products.filter(product => product.id != id);
    this.productService.removeProduct(id).subscribe(() => this.router.navigateByUrl('/product-manager'));
  }
}
