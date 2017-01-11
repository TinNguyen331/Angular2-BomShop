import { Component } from '@angular/core';
import { HeaderComponent } from './Customer/Shared/Header/header.component';
import { FooterComponent } from './Customer/Shared/Footer/footer.component'; 

declare var $:any;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
})
export class AppComponent { 
  constructor(){
  }
  
}
