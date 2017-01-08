import { Component, OnInit,ElementRef,AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'customer-feature',
    templateUrl: 'featured.component.html'
})
export class FeatureComponent implements OnInit ,AfterViewInit{
    constructor(private el:ElementRef) { }

    ngAfterViewInit(){
        $(this.el.nativeElement).ready(function(){
            /*-------------------------------------
             jquery Featured Products slider activation code
             -------------------------------------*/
            $('#featured-products-carousel').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 3,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });


            /*-------------------------------------
             jquery Featured Products 2 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel2').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });


            /*-------------------------------------
             jquery Featured product 3 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel3').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 1],
            });


            /*-------------------------------------
             jquery Featured Products 4 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel4').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 5,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 1],
            });
        });
    }

    ngOnInit() { }
}