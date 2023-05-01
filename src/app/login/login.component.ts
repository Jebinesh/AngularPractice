import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='jebinesh';
  password='123'
  errorMessage='Login Denied'
  invalidIndicator=false

  //Router
  //Angular.giveMeRouter
  //Dependency injection

  constructor(private routes :Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username)
    if (this.username == 'Jebin'&& this.password =='123'){
      this.routes.navigate(['welcome',this.username])

      this.invalidIndicator=false

    }else{
      this.invalidIndicator=true
    }
  }
}
