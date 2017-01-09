import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    private apiUrl="http://localhost:8080/login";
    constructor(private _http:Http) { }
    Login(data:any): Observable<any> {
        return this._http.post(this.apiUrl,data).map((response:Response) => response.json());
    } 
}