import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'customer-event',
    templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit, AfterViewInit {
    private eventDay= '2017/01/09';
    
    constructor(private el: ElementRef) { }
    ngAfterViewInit() {
        $(this.el.nativeElement).ready(function () {
            
            /*-------------------------------------
            Countdown activation code
            -------------------------------------*/
            $('#countdown').countdown('2017/09/01', function (e:any) {
                $(this).html(e.strftime("<div class='countdown-section'><h3>%-d</h3> <p>day%!d<p> </div><div class='countdown-section'><h3>%H</h3> <p>Hour%!H</p> </div><div class='countdown-section'><h3>%M</h3> <p>Min%!M</p> </div><div class='countdown-section'><h3>%S</h3> <p>Sec%!S</p> </div>"));
            });
        });
    }
    ngOnInit() { }
}