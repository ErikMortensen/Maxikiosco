import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

    private products:Product[] = [
        {
            nombre: "Aceite Cañuelas",
            desc: "Aceite de Girasol Cañuelas, 1.5 Litros",
            img: "assets/img/aceite_girasol_cañuelas.jpg",
            precio: "80"
        },
        {
            nombre: "Aceite Cocinero",
            desc: "Aceite de Girasol Cocinero, 1.5 Litros",
            img: "assets/img/aceite_girasol_cocinero.jpg",
            precio: "90"
        },
        {
            nombre: "Aceite Natura",
            desc: "Aceite de Girasol Natura, 1.5 Litros",
            img: "assets/img/aceite_girasol_natura.jpg",
            precio: "87"
        },
        {
            nombre: "Fideos Espagueti Matarazzo",
            desc: "Espagueti Matarazzo, 500gr",
            img: "assets/img/espagueti_matarazzo.jpg",
            precio: "87"
        },
        {
            nombre: "Gaseosa Coca Cola",
            desc: "Coca Cola común, 3 Litros",
            img: "assets/img/coca_cola_3.jpg",
            precio: "120"
        },
        {
            nombre: "Gaseosa Sprite",
            desc: "Sprite común, 3 Litros",
            img: "assets/img/sprite_3L.jpg",
            precio: "100"
        }
    ]
    
    constructor() { 
        console.log("Servicio listo para usarse.")
    }

    getProducts(){
        return this.products;
    }

    getProduct( id:number ){
        return this.products[id];
    }

    findProduct( name:string ){
        let productArray:Product[] = [];
        name = name.toLowerCase();
    
        for(let i=0; i< this.products.length; i++){

            let product = this.products[i];

            let nombre = product.nombre.toLowerCase();

            if( nombre.indexOf(name) >= 0){
                product.idx = i;
                productArray.push( product);
            }
        }

        return productArray;

    }

}

export interface Product{  
    nombre: string;
    desc: string;
    img: string;
    precio: string;
    idx?:number;
}