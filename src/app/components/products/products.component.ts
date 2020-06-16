import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];

  constructor( private _productsService: ProductsService,
                private router:Router) { }

  ngOnInit() {
    this.products = this._productsService.getProducts();
    
    // console.log(this.products);
  }

  verProduct(idx:number){
    this.router.navigate( ['/product', idx] );
  }

}



