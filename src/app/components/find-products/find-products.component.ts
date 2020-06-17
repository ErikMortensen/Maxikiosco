import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find-products',
  templateUrl: './find-products.component.html'
})
export class FindProductsComponent implements OnInit {
  
  @Input() product:any = {};
  @Input() index:number;

  products:Product[] = [];
  termino:string;


  constructor(private activatedRoute:ActivatedRoute,
              private _productsService: ProductsService,
              private router:Router) { 
    
    this.activatedRoute.params.subscribe( params => {
      this.products =  this._productsService.findProduct(params['termino']);
      this.termino = params['termino'];
      // console.log(this.products);
    });
  }

  ngOnInit() {
  }

  verProduct(){
    this.router.navigate( ['/product', this.index] );
  }

}
