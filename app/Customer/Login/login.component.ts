import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
    moduleId: module.id,
    selector: 'customer-login',
    templateUrl: 'login.component.html',
    providers:[LoginService]
})
export class LoginComponent implements OnInit {

    private user:any;

    Login(value:any){
        console.log(value);
        this.loginService.Login(value).subscribe((response:any)=>{
           this.user =response;
           console.log(response);
       });
    }
    constructor(private loginService:LoginService) {
        
     }

    ngOnInit() { 
    
    }

}