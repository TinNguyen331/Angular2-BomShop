import { Injectable } from '@angular/core';
import { BuyProductModel } from '../Model/BuyProductModel';
import { CartService } from '../CartService/cart.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckOutService {
    private data: BuyProductModel;
    public cusID: any = null;
    private apiUrl = "http://localhost:8080/buyproduct";
    constructor(private cartService: CartService, private _http: Http) {
        console.log(this.cartService.getCart());
    }
    checkout(): Observable<any> {
        this.data = new BuyProductModel(this.cusID.id, this.cartService.getCart(), 1);
        console.log(this.data);

        return this._http.post(this.apiUrl, this.data).map((response: Response) => response.json());
    }
    setCusID(user: any) {
        console.log("User in service");
        console.log(user);
        this.cusID = user;
        console.log("User after set");
        console.log(this.cusID);
    }
    getCusID(): any {
        console.log("Return value service");
        console.log(this.cusID);
        return this.cusID;
    }
}