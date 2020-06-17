import { Component, OnInit } from '@angular/core';
import { Product } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  findProduct( termino:string ){

    // console.log(this.arrayProduct);

    this.router.navigate( ['/find-products', termino] );
  }
}
