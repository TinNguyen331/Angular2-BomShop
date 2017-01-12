import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOutService } from '../CheckoutService/checkout.service';

@Component({
    moduleId: module.id,
    selector: 'customer-checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckOutComponent implements OnInit {
    constructor(private checkoutService: CheckOutService,private router:Router) { }

    ngOnInit() { }
    checkout() {
        console.log(this.checkoutService.getCusID());
        if(this.checkoutService.getCusID() == null){
            alert("Please login to continue !!!");
            this.router.navigate(['/login']);
        }
        this.checkoutService.checkout().subscribe((response: any) => {
            console.log(response);
            alert("Your order has been sent to us ! \n Thank you !");
        }, error => {
            alert("Have some error. Contact to admin to more info !");
            console.log(error);
        });
    }
}