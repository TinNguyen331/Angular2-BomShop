"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ContactComponent = (function () {
    function ContactComponent(el) {
        this.el = el;
    }
    ContactComponent.prototype.onMapsReady = function () {
        var brussels = new google.maps.LatLng(10.849774, 106.768527);
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
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        window.googleMapsReady = this.onMapsReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=googleMapsReady";
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-contact',
            templateUrl: 'contact.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map