import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.detailProduct();
  }
  detailProduct(){
    // this.route.params.subscribe(data => {
    //   let {id} = data;
      // console.log(id);
    //   this.product = this.productService.detailProduct(id);
    // }) 
    // this.productService.detailProduct();
    this.route.params.subscribe(data => {
      let {id} = data;
      // console.log(id); 
      this.productService.detailProduct(id).subscribe(data => 
        // console.log(data)  
        this.product = data 
      );
    }) 
  }

}