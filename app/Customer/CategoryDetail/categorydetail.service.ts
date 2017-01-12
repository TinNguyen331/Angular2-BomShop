import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryDetailsService {
    private apiUrl = "http://localhost:8080/product/getcateid/";
    private list:any[];
    constructor(private _http: Http) { }

    getCategoryDetailsList(id:number): Observable<any[]>{
         return this._http.get(this.apiUrl+id).map((response:Response) => response.json());
    }
}