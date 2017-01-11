import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { CartService } from '../CartService/cart.service';

@Component({
    moduleId: module.id,
    selector: 'customer-dialog',
    templateUrl: 'dialog.component.html',
})
export class DialogComponent implements OnInit {
    product: any;
    quantity: number = 1;
    constructor(public dialogRef: MdDialogRef<any>, private cartService: CartService) { }

    ngOnInit() {  }
    onPlus() {
        if (this.quantity < 10)
            this.quantity++;
    }
    onMinus() {
        if (this.quantity > 1)
            this.quantity--;
    }

    addToCart() {
        this.cartService.addProduct(this.product,this.quantity);
    }
}