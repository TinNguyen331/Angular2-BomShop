import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FeaturedService {
    private apiUrl = "http://localhost:8080/product";
    private list:any[];
    constructor(private _http: Http) { }

    GetProductList(): Observable<any[]>{
         return this._http.get(this.apiUrl+"/split").map((response:Response) => response.json());
    }
    

}