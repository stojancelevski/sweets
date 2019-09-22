import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
   private data = [
        {
            category: 'Milk Chocolate',
            expanded: true,
            products: [
                {id: 0, name: 'MILK CHOCOLATE ASSORTMENT', price: '30.05', imageurl: 'milkchocolate.jpg'},
                {id: 1, name: 'MILK CHOCOLATE CARAMEL BEARS PAWS', price: '30.50', imageurl: 'milkchocolatecaramel.jpg'},
                {id: 2, name: 'GENERAL BOXED ASSORTMENT', price: '15.25', imageurl: 'generalboxed.jpg'},
                {id: 3, name: 'MILK CHOCOLATE SEAFOAM', price: '11.25', imageurl: 'seafoam.jpg'}
            ]
        },
        {
            category: 'White Choclate',
            products: [
                {id: 4, name: 'SNOWBIRDS', price: '15.25', imageurl: 'snowbirds.jpg'},
                {id: 5, name: 'FLOCK OF BIRDS', price: '30.50', imageurl: 'flockofbirds.jpg'}
            ]
        },
        {
            category: 'Flavored Popcorns',
            products: [
                {id: 6, name: 'SMALL GIFT BASKET', price: '25.00', imageurl: 'smallbasket.jpg'},
                {id: 7, name: 'CADILLAC CORN', price: '14.95', imageurl: 'cadilaccorn.jpg'},
                {id: 8, name: 'CLASSIC CARAMEL CORN', price: '12.95', imageurl: 'clasiccaramel.jpg'}
            ]
        }
    ];

    private cart = [];

    constructor() {
    }

    getProducts() {
        return this.data;
    }

    reset(){
        this.cart = [];
    }
    getCart() {
        return this.cart;
    }

    addProduct(product) {
        this.cart.push(product);
    }
}
