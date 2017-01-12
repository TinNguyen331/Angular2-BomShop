import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CheckOutService } from '../CheckoutService/checkout.service';

@Component({
    moduleId: module.id,
    selector: 'customer-login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    private user: any;
    constructor(private checkoutService:CheckOutService,private loginService: LoginService, private router:Router) {

    }
    Login(value: any) {
        console.log(value);
        this.loginService.Login(value).subscribe((response: any) => {
            this.user = response;
            console.log("In login");
            console.log(this.user);
            this.checkoutService.setCusID(this.user);
            this.router.navigate(['/']);
            alert("Login successful");
        }, error => {
            if (error.status == 404){
                alert("Login fail");
                console.log("Tai Khoan Khong Ton Tai");
            }
                
        });
    }
    Register(value: any) {
        console.log(value);
        if (value.passWord != value.confimPassWord) {
            console.log("PassWord do not match");
        }
        else {
            this.loginService.Register(value).subscribe((response: any) => {
                alert("Register successful");
                this.checkoutService.setCusID(this.user);
                this.router.navigate(['/']);
                console.log(response);
            }, error => {
                console.log(error);
            });
        }


    }

    

    ngOnInit() { 

    }

}