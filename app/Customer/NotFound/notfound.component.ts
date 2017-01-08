import { Component, OnInit } from '@angular/core';
import {HeaderShopComponent} from '../Shared/HeaderShop/headershop.component';
import {FooterComponent} from '../Shared/Footer/footer.component';

@Component({
    moduleId: module.id,
    selector: 'customer-notfound',
    templateUrl: 'notfound.component.html'
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}