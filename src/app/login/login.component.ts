import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  // accNo = ""
  // pwd = ""

  loginForm = this.fb.group({
    accNo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor(private router:Router,private db:DataService,private fb:FormBuilder) { }

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
    let acno = this.loginForm.value.accNo
    let pwd= this.loginForm.value.accNo
    // let db=this.db.database
    if (this.loginForm.valid) {
    const result=this.db.login(acno,pwd)
    result?this.router.navigateByUrl('dashboard'):alert('login failed')
    }
    else {
      alert('invalid form')
    }

    // if(acno in db){
    //   if(pwd==db[acno]["password"]){
    //     // alert('Login Successfull')
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //     alert('Password Error')
    //   }
    // }
    // else{
    //   alert('Invalid User')
    // }
  }
}
