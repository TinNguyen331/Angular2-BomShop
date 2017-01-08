import { Component, OnInit } from '@angular/core';
import { HeaderShopComponent} from '../Shared/HeaderShop/headershop.component';
import { AdvantageComponent } from '../Shared/Advantage/advantage.component';
import { FooterComponent} from '../Shared/Footer/footer.component';

@Component({
    moduleId: module.id,
    selector: 'customer-about',
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}