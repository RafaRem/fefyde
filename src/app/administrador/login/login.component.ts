import { Component, OnInit } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
 
  password: string;
  constructor() { }

  ngOnInit() {
  }

  iniciarSecion(){
    if ((this.email == 'edgarembao@hotmail.com' && this.password == 'chunpanemink')){
      alert("su usuario es correcto")
    }else{alert("usted esta mal") }
  }
}
