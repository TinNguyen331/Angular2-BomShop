import { Component, ElementRef, AfterViewInit, ViewContainerRef, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material';
import { DialogComponent } from '../DialogProduct/dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { CartService } from '../CartService/cart.service';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'customer-categories',
    templateUrl: 'categories.component.html'
})
export class CategoriesComponent  {
    product: any;
    quantity: number = 1;

    constructor(private el: ElementRef, public dialog: MdDialog, public viewContainerRef: ViewContainerRef,
        private cartService: CartService) {
    }

    addToCart(product: any) {
        this.cartService.addProduct(product, 1);
    }

}