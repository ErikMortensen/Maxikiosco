import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-products',
  templateUrl: './find-products.component.html'
})
export class FindProductsComponent implements OnInit {

  products:Product[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _productsService: ProductsService) { 
    
    this.activatedRoute.params.subscribe( params => {
      this.products =  this._productsService.findProduct(params['termino']);
     
      // console.log(this.products);
    });
  }

  ngOnInit() {
  }

}
