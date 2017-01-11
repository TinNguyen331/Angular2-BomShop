import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'customer-event',
    templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
    private dateEvent='2017/01/13';
    constructor(private el: ElementRef) { }
    ngOnInit() {

         $('#countdown').countdown(this.dateEvent, function (e:any) {
                $(this).html(e.strftime("<div class='countdown-section'><h3>%-d</h3> <p>day%!d<p> </div><div class='countdown-section'><h3>%H</h3> <p>Hour%!H</p> </div><div class='countdown-section'><h3>%M</h3> <p>Min%!M</p> </div><div class='countdown-section'><h3>%S</h3> <p>Sec%!S</p> </div>"));
        })
     }
}