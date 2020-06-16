import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  product:any = {};

  constructor( private activatedRoute:ActivatedRoute,
                private _productsService: ProductsService ) { 

    this.activatedRoute.params.subscribe( params =>{
      
      this.product = this._productsService.getProduct( params['id']);
      console.log(this.product)
    });
  }

  ngOnInit() {
  }

}
