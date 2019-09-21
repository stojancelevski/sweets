import {Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.page.html',
    styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
    segment: any;
    products: any;

    constructor(private cartSerivce: CartService) {
        this.cartSerivce.data.forEach(data => {
            this.products = data.products;
        });
        console.log(this.products);

    }

    filter(val: any) {
        this.cartSerivce.data.filter(data => {
            data.category = val;
        });
    }

    segmentChanged(ev: any) {
        this.segment = ev.detail.value;
        console.log(this.segment);
    }

    ngOnInit() {
    }


}
