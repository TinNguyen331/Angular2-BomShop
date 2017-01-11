import { Component, OnInit, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { FeaturedService } from './featured.service';
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material';
import { DialogComponent } from '../DialogProduct/dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'customer-feature',
    templateUrl: 'featured.component.html',
    providers: [FeaturedService]
})
export class FeatureComponent implements OnInit, AfterViewInit {
     dialogRef: MdDialogRef<any>;
    private productList: any[];

    constructor(private el: ElementRef, private featureService: FeaturedService, public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {
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
        console.log("OnInit");
        //console.log(this.productList);
        this.featureService.GetProductList().subscribe((response: any) => {
            this.productList = response;
        });
    }
    ngAfterViewInit() {
        console.log("On AfterViewInit");

    }
}