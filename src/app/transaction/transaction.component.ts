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
    this.acno= JSON.parse(localStorage.getItem('currentAccNo') || '')
    
    // this.balance=this.ds.getBalance(this.acno)
    this.ds.transaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        // console.log(result.message);
        
        this.transaction=result.message
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
   }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentAccNo")){
    //   this.router.navigateByUrl("")
    // }
  }

}
