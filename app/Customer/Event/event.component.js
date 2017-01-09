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
var EventComponent = (function () {
    function EventComponent(el) {
        this.el = el;
        this.dateEvent = '2017/01/10';
    }
    EventComponent.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).ready(function () {
            /*-------------------------------------
            Countdown activation code
            -------------------------------------*/
            $('#countdown').countdown('2017/01/10', function (e) {
                $(this).html(e.strftime("<div class='countdown-section'><h3>%-d</h3> <p>day%!d<p> </div><div class='countdown-section'><h3>%H</h3> <p>Hour%!H</p> </div><div class='countdown-section'><h3>%M</h3> <p>Min%!M</p> </div><div class='countdown-section'><h3>%S</h3> <p>Sec%!S</p> </div>"));
            });
        });
    };
    EventComponent.prototype.ngOnInit = function () { };
    EventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-event',
            templateUrl: 'event.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map