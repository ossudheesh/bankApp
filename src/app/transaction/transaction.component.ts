import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:any
  acno:any
  balance:any

  constructor(private ds:DataService, private router:Router) {
    this.acno=this.ds.currentAccNo
    this.balance=this.ds.getBalance(this.acno)
    this.transaction=this.ds.transaction(this.acno)
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAccNo")){
      this.router.navigateByUrl("")
    }
  }

}
