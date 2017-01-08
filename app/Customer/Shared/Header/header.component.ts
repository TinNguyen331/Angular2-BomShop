import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'customer-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, AfterViewInit {

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
         $('nav#dropdown').meanmenu({siteLogo: "<a href='index.html' class='logo-mobile-menu'><img src='assist/img/logo.png' /></a>"});
        });
    }
    ngOnInit() {

    }

}