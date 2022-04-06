import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  

  constructor(private router:Router,private db:DataService) { }

  ngOnInit(): void {
  }


  //======== one way event binding using $event========

  // acnoChange(event: any) {
  //   this.accNo = event.target.value
  //   // console.log(this.accNo);

  // }
  // pwdChange(event: any) {
  //   this.pwd = event.target.value
  //   // console.log(this.pwd);

  // }


  // login() {
  //   let acno = this.accNo
  //   let pwd= this.pwd
  //   let db=this.database

  //   if(acno in db){
  //     if(pwd==db[acno]["password"]){
  //       alert('Login Successfull')
  //     }
  //     else{
  //       alert('Password Error')
  //     }
  //   }
  //   else{
  //     alert('Invalid User')
  //   }
  // }

  // ================ one way event binding - using template referencing variable ===============

  // login(ac:any,pw:any) {
  //   let acno = ac.value
  //   let pwd= pw.value
  //   let db=this.database

  //   if(acno in db){
  //     if(pwd==db[acno]["password"]){
  //       alert('Login Successfull')
  //     }
  //     else{
  //       alert('Password Error')
  //     }
  //   }
  //   else{
  //     alert('Invalid User')
  //   }
  // }



  // ===== using two way event binding - using ngModel ======

  login() {
    let acno = this.accNo
    let pwd= this.pwd
    let db=this.db.database

    if(acno in db){
      if(pwd==db[acno]["password"]){
        // alert('Login Successfull')
        this.router.navigateByUrl('dashboard')
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
