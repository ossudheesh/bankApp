import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = "Your Perfect Banking Partner"   //String Interpolation syntx: {{variable-name}} in html page
  acc = "account number please"  //property binding example: [placeholder]="acc"
  accNo = ""
  pwd = ""


  database:any = {
    1000: { acno: 1000, uname: "abin", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "anu", password: 1001, balance: 4000 },
    1002: { acno: 1002, uname: "jith", password: 1002, balance: 3000 },
  }

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event: any) {
    this.accNo = event.target.value
    // console.log(this.accNo);

  }
  pwdChange(event: any) {
    this.pwd = event.target.value
    // console.log(this.pwd);

  }


  login() {
    let acno = this.accNo
    let pwd= this.pwd
    let db=this.database

    if(acno in db){
      if(pwd==db[acno]["password"]){
        alert('Login Successfull')
      }
      else{
        alert('Password Error')
      }
    }
    else{
      alert('Invalid User')
    }
  }
}
