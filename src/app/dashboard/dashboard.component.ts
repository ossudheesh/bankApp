import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acc = ''
  pwd = ''
  amount = ''

  wacc = ''
  wpwd = ''
  wamount = ''

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  deposit() {
    let acc = this.acc
    let pwd = this.pwd
    let amount = parseInt(this.amount)

    const auth = this.ds.login(acc, pwd)
    if (auth) {
      const result = this.ds.deposit(acc, amount)
      alert(amount + ' credited on ' + acc + ', Balance:' + result)
    }


  }
  withdraw() {
    let acc=this.wacc
    let pwd=this.wpwd
    let amount=parseInt(this.wamount)

    const auth=this.ds.login(acc,pwd)
    if(auth){
      const result=this.ds.withdraw(acc,amount)
      result?alert(amount+' is withdrew from '+acc+' , Balance:'+result):alert('Insufficient Balance')
      
    }
  }
}
