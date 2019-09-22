import {Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.page.html',
    styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
    segment: any;
    products: any = [];
    cart = [];

    constructor(private cartSerivce: CartService, private router: Router) {

    }

    segmentChanged(ev: any) {
        this.segment = ev.detail.value;
        this.products = this.cartSerivce.getProducts().find(val => val.category === this.segment);
    }

    ngOnInit() {
        this.cart = this.cartSerivce.getCart();
    }

    addToCart(product) {
        this.cartSerivce.addProduct(product);
    }

    openCart() {
        this.router.navigate(['cart']);
    }


}
