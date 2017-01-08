import { Component, OnInit } from '@angular/core';
import {HeaderShopComponent} from '../Shared/HeaderShop/headershop.component';
import {FooterComponent} from '../Shared/Footer/footer.component';

@Component({
    moduleId: module.id,
    selector: 'customer-cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}