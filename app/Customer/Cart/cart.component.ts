import { Component, OnInit } from '@angular/core';
import { CartService } from '../CartService/cart.service';


@Component({
    moduleId: module.id,
    selector: 'customer-cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {
    public cart:any[]=[];
    constructor(private cartService:CartService ){
     }
    onPlus(pro:any){
        console.log(pro);
        if(pro.quantity<10)
             pro.quantity++;
    }
    onMinius(pro:any){
        console.log(pro);
        if(pro.quantity>1)
            pro.quantity--;
    }
    updateCart(){
        this.cartService.updateCart(this.cart);
    }
    
    
    ngOnInit() { 
        this.cart=this.cartService.getCart();
    }
}