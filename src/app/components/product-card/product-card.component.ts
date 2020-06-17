import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: []
})
export class ProductCardComponent implements OnInit {

  @Input() product:any = {};
  @Input() index:number;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  verProduct(){
    this.router.navigate( ['/product', this.index] );
  }

}
