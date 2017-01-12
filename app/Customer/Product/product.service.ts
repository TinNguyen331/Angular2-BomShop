import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private apiUrl="http://localhost:8080/product/bestseller"
    constructor(private _http:Http) {
     }
     GetBestSeller():Observable<any[]>{
         return this._http.get(this.apiUrl).map((response:Response) => response.json())
     }
}