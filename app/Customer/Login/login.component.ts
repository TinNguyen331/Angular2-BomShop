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
       },error=>{
           if(error.status == 404 )
           alert("Tai Khoan Khong Ton Tai");
       });
    }
    constructor(private loginService:LoginService) {
        
     }

    ngOnInit() { 
    
    }

}