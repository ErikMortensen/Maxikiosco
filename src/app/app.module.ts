import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';


// Rutas
import { APP_ROUTING } from './app.routes';

// Services
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { FindProductsComponent } from './components/find-products/find-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ProductComponent,
    FindProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,    
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
