import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderShopComponent } from '../Shared/HeaderShop/headershop.component';
import { FooterComponent } from '../Shared/Footer/footer.component';

declare var $: any;
declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'customer-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit, AfterViewInit {
    constructor(private el: ElementRef) { }
    onMapsReady() {
        let brussels = new google.maps.LatLng(10.849774, 106.768527);
        var mapOptions = {
            zoom: 15,
            center: brussels
        };
        this.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        var marker = new google.maps.Marker({
            position: brussels
        });
        //google.maps.event.addListener(marker, 'click', ( () => this.select.next("i was a map click")) )
        marker.setMap(this.map);
    }
    ngAfterViewInit() {
        (<any>window).googleMapsReady = this.onMapsReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=googleMapsReady";

    }
    ngOnInit() {

    }
}