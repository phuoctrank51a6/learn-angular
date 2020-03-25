import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product ;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.editProduct();
  }
  editProduct(){
    // this.route.params.subscribe(data => {
    //   let {id} = data;
      // console.log(id);
      // this.product = this.productService.detailProduct(id);
    // }) 
    this.route.params.subscribe(data => {
      let {id} = data;
      console.log(id);
      this.productService.detailProduct(id).subscribe(data => 
        // console.log(data)  
        this.product = data
      );
    }) 
    // this.productService.detailProduct();
  }
  updateProduct(){
    // console.log(this.product);
    // this.productService.updateProduct(this.product);
    this.productService.updateProduct(this.product).subscribe(() => this.router.navigateByUrl('/product-manager'));
  }

}