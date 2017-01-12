import { Injectable } from '@angular/core';
import { BuyProductModel } from '../Model/BuyProductModel';
import { CartService } from '../CartService/cart.service';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckOutService {
    private data:BuyProductModel;
    private apiUrl="http://localhost:8080/buyproduct";
    constructor(private cartService:CartService ,private _http:Http) { 
        console.log(this.cartService.getCart());
    }
    checkout():Observable<any>{
        this.data=new BuyProductModel(1,this.cartService.getCart(),1);
        console.log(this.data);
        
        return this._http.post(this.apiUrl,this.data).map((response:Response) => response.json());
    }
}