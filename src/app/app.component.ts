import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rajesh';
  user : User;
  inputText : string = "Intial Value";
 
  constructor() {
    this.user = new User();
    this.user.name = "Rajeswara Sarma";
    this.user.designation = "Software Developer";
    this.user.address = "DSNR";
    this.user.phone = ['7893729944','9866489944'];
  }
}
