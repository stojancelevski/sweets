import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    slideOpts: any;
    cart =[];
    constructor(private menu: MenuController,private router:Router,private cartService: CartService) {
    }

    ngOnInit() {
        this.cart =  this.cartService.getCart();
        this.menu.enable(true);
    }
    openCart() {
        this.router.navigate(['cart']);
    }
}
