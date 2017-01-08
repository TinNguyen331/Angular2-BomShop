import { Component, OnInit } from '@angular/core';
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