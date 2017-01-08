import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'customer-slider',
    templateUrl: 'slider.component.html'
})
export class SliderComponent implements OnInit, AfterViewInit {
    constructor(private el: ElementRef) { }
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            $('#blog-carousel').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 3,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [980, 2],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
            });
            $('#ensign-nivoslider').nivoSlider({
                effect: 'slideInRight',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNavThumbs: false,
                pauseOnHover: true,
                manualAdvance: false
            });

            $('#ensign-nivoslider-2').nivoSlider({
                effect: 'fade',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNavThumbs: false,
                pauseOnHover: true,
                manualAdvance: false
            });

            $('#ensign-nivoslider-3').nivoSlider({
                effect: 'fade',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNavThumbs: false,
                pauseOnHover: true,
                manualAdvance: false
            });
            $('#blog-carousel2').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 3,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [980, 1],
                itemsTablet: [768, 1],
                itemsMobile: [479, 1],
            });
            $('#best-seller-carousel').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 3,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [980, 2],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
            });

            /*-------------------------------------
             jquery Best Seller 2 slider activation code
             -------------------------------------*/
            $('#best-seller-carousel2').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: true,
                navigation: false,
                items: 6,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });

            /*-------------------------------------
             jquery Brand slider activation code
             -------------------------------------*/
            $('#brand-carousel').owlCarousel({
                autoPlay: true,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 6,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [980, 4],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });

            /*-------------------------------------
             jquery Brand 2 slider activation code
             -------------------------------------*/
            $('#brand-carousel2').owlCarousel({
                autoPlay: true,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 7,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [980, 4],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });


            /*-------------------------------------
             jquery Brand 3 slider activation code
             -------------------------------------*/
            $('#brand-carousel3').owlCarousel({
                autoPlay: true,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 7,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });
        });
    }
    ngOnInit(): void {

    }

}