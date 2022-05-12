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
  // acno = ""
  // password = ""

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  //======== one way event binding using $event========

  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   // console.log(this.acno);

  // }
  // passwordChange(event: any) {
  //   this.password = event.target.value
  //   // console.log(this.password);

  // }


  // login() {
  //   let acno = this.acno
  //   let password= this.password
  //   let db=this.database

  //   if(acno in db){
  //     if(password==db[acno]["password"]){
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
  //   let password= pw.value
  //   let db=this.database

  //   if(acno in db){
  //     if(password==db[acno]["password"]){
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
    let acno = this.loginForm.value.acno
    let password = this.loginForm.value.acno
    // let db=this.db.database
    if (this.loginForm.valid) {
      this.ds.login(acno, password)
        .subscribe((result: any) => {
          if (result) {
            localStorage.setItem('currentAccNo',JSON.stringify(result.currentAccNo))
            localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
            localStorage.setItem('token',JSON.stringify(result.token))
            alert(result.message)
            this.router.navigateByUrl('dashboard')
          }
        },
        (result)=>{
          alert(result.error.message)
        })
    }
    else {
      alert('invalid form')
    }

    // if(acno in db){
    //   if(password==db[acno]["password"]){
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
