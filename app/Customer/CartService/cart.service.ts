import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {  
    
    private cartList:any[]=[];
    private cart=new Subject();
    public content=this.cart.asObservable()
    constructor() { }
   
    addProduct(product:any,quantity:number){
        product.quantity=quantity;
        this.cart.next(product);
        this.cartList.push(product);
    }
    delProduct(product:any){
        this.cartList.filter(pro=>pro.productId!=product.productId);
    }
    getCart():any[]{
        return this.cartList;
    }
    getTotalPrice():number{
        let total=this.cartList.reduce((sum,cartItem)=>{
            return sum+=cartItem.productPrice,sum;
        },0);
        return total;
    }
    getLength():number{
        return this.cartList.length;
    }
    updateCart(cart:any[]):void{
        this.cartList=cart;
    }
    
}