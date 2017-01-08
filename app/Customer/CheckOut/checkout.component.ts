import { Component, OnInit } from '@angular/core';
import { HeaderShopComponent } from '../Shared/HeaderShop/headershop.component';
import { FooterComponent } from '../Shared/Footer/footer.component';

@Component({
    moduleId: module.id,
    selector: 'customer-checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckOutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}