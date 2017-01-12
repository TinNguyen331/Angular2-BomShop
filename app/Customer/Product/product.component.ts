import { Component, OnInit,ViewContainerRef,ElementRef } from '@angular/core';
import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material';
import { DialogComponent } from '../DialogProduct/dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'customer-product',
    templateUrl: 'product.component.html',
    providers:[ProductService]
})
export class ProductComponent implements OnInit {
    dialogRef: MdDialogRef<any>;
    public bestseller:any[];
    constructor(private productService:ProductService,private el: ElementRef,  public dialog: MdDialog, public viewContainerRef: ViewContainerRef) { }

    ngOnInit() { 
        this.productService.GetBestSeller().subscribe((response: any) => {
            this.bestseller = response;
        })
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
}