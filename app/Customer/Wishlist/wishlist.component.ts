import { Component, OnInit } from '@angular/core';
import {HeaderShopComponent} from '../Shared/HeaderShop/headershop.component';
import {FooterComponent} from '../Shared/Footer/footer.component';

@Component({
    moduleId: module.id,
    selector: 'customer-wishlist',
    templateUrl: 'wishlist.component.html'
})
export class WishListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}