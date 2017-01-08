import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../Customer/Slider/slider.component';
import { CategoriesComponent } from '../../Customer/Categories/categories.component';
import { FeatureComponent } from '../../Customer/FeaturedProduct/featured.component';
import { EventComponent } from '../../Customer/Event/event.component';
import { ProductComponent } from '../../Customer/Product/product.component';
import { BlogSharedComponent } from '../../Customer/Shared/BlogShared/blogshared.component';
import { AdvantageComponent } from '../../Customer/Shared/Advantage/advantage.component';

@Component({
    moduleId: module.id,
    selector: 'customer-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}