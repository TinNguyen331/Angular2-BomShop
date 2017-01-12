import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoryDetailsService } from './categorydetail.service';
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material';
import { DialogComponent } from '../DialogProduct/dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { CartService } from '../CartService/cart.service';

@Component({
    moduleId: module.id,
    selector: 'customer-categorydetail',
    templateUrl: 'categorydetail.component.html',
    providers: [CategoryDetailsService]
})
export class CategoryDetailComponent implements OnInit {
    product: any;
    public cateList: any[];
    dialogRef: MdDialogRef<any>;
    public cateid: number;
    public subscription: Subscription;
    constructor(private el: ElementRef, private router: Router, private activatedRoute: ActivatedRoute, private cateService: CategoryDetailsService,
        public dialog: MdDialog, public viewContainerRef: ViewContainerRef, private cartService: CartService) {
        router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((val) => {
                this.onChangeURL();
            })
    }
    onChangeURL() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.cateid = params['id']
        });
        console.log(this.cateid);
        this.cateService.getCategoryDetailsList(this.cateid).subscribe((response: any) => {
            this.cateList = response;
            console.log(this.cateList);
        });
    }
    open(product: any) {
        console.log(product);
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(DialogComponent, config);
        this.dialogRef.componentInstance.product = product;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });

    }
    ngOnInit() {

    }

    addToCart(product: any) {
        this.cartService.addProduct(product, 1);
    }

}