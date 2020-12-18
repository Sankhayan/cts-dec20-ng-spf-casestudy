import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LocationStrategy } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: number;
  userPassword: string;
  msg= "";
  userResponse : any;
  constructor(private service: LoginService, private router: Router, private locationStrategy : LocationStrategy) { 
    
  }

  getUserId(userId) {
    this.userId = userId;
  }

  getUserPassword(userPassword) {
    this.userPassword = userPassword;
  }

  ngOnInit(): void {
  }

  getHome() {
    this.service.loginUserFromRemote(this.userId, this.userPassword).subscribe(response =>{ this.userResponse = response
    this.router.navigate(['home',this.userId]);
      }, 
      error =>{
      this.msg="Incorrect credentials, enter valid email and password" }
      )
  }
}
