import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // acc = ''
  // pwd = ''
  // amount = ''

  // wacc = ''
  // wpwd = ''
  // wamount = ''
  user:any
  loginDate:any
  acno:any

  depositForm = this.fb.group({
    accNo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  withdrawForm = this.fb.group({
    waccNo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wpwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wamount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
    this.user=this.ds.currentUser
    this.loginDate=new Date()
   }
  ngOnInit(): void {
    if(!localStorage.getItem("currentAccNo")){
      this.router.navigateByUrl("")
    }
  }
  deposit() {
    let acc = this.depositForm.value.accNo
    let pwd = this.depositForm.value.pwd
    let amount = parseInt(this.depositForm.value.amount)
    if (this.depositForm.valid) {
      const auth = this.ds.login(acc, pwd)
      if (auth) {
        const result = this.ds.deposit(acc, amount)
        alert(amount + ' credited on ' + acc + ', Balance:' + result)
      }
    }
    else {
      alert('invalid form')
    }


  }
  withdraw() {
    let acc = this.withdrawForm.value.waccNo
    let pwd = this.withdrawForm.value.wpwd
    let amount = parseInt(this.withdrawForm.value.wamount)
    if (this.withdrawForm.valid) {

      const auth = this.ds.login(acc, pwd)
      if (auth) {
        const result = this.ds.withdraw(acc, amount)
        result ? alert(amount + ' is withdrew from ' + acc + ' , Balance:' + result) : alert('Insufficient Balance')

      }
    }
    else {
      alert('invalid form')
    }
  }
  logout(){
    localStorage.removeItem("currentAccNo")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl("")
  }
  deleteFromParent(){
    this.acno=(localStorage.getItem("currentAccNo"))
  }
  onCancel(){
    this.acno=""
  }
  onDelete(event:any){
    alert('Account Number'+event)
  }
}
