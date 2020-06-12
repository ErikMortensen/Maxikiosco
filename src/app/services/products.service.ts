import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

    private products:any[] = [
        {
            nombre: "Aceite Cañuelas",
            desc: "Aceite de Girasol Cañuelas, 1.5 Litros",
            img: "assets/img/aceite_girasol_cañuelas",
            precio: "80"
        },
        {
            nombre: "Aceite Cocinero",
            desc: "Aceite de Girasol Cocinero, 1.5 Litros",
            img: "assets/img/aceite_girasol_cocinero",
            precio: "90"
        },
        {
            nombre: "Aceite Natura",
            desc: "Aceite de Girasol Natura, 1.5 Litros",
            img: "assets/img/aceite_girasol_natura",
            precio: "87"
        }
    ]
    
    constructor() { 
        console.log("Servicio listo para usarse.")
    }

    getProducts(){
        return this.products;
    }

}