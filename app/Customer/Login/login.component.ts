import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
    moduleId: module.id,
    selector: 'customer-login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    private user: any;

    Login(value: any) {
        console.log(value);
        this.loginService.Login(value).subscribe((response: any) => {
            this.user = response;
        }, error => {
            if (error.status == 404)
                console.log("Tai Khoan Khong Ton Tai");
        });
    }
    Register(value: any) {
        console.log(value);
        if (value.passWord != value.confimPassWord) {
            console.log("PassWord do not match");
        }
        else {
            this.loginService.Register(value).subscribe((response: any) => {
                console.log(response);
            }, error => {
                console.log(error);
            });
        }


    }

    constructor(private loginService: LoginService) {

    }

    ngOnInit() { }

}