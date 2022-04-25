import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any
  currentAccNo: any
  currentBalance: any

  database: any = {
    1000: { acno: 1000, uname: "abin", password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "anu", password: 1001, balance: 4000, transaction: [] },
    1002: { acno: 1002, uname: "jith", password: 1002, balance: 3000, transaction: [] },
  }

  constructor() { 
    this.getDetails()
  }

  // to save details on localStorage
  saveDetails() {
    localStorage.setItem("database", JSON.stringify(this.database))
    if (this.currentAccNo) {
      localStorage.setItem("currentAccNo", JSON.stringify(this.currentAccNo))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }
  // to get details from localStorage
  getDetails() {
    if (localStorage.getItem("database")) {
      this.database = JSON.parse(localStorage.getItem("database") || '')
    }
    if (localStorage.getItem("currentAccNo")) {
      this.currentAccNo = JSON.parse(localStorage.getItem("currentAccNo") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }



  register(uname: any, acno: any, password: any) {
    if (acno in this.database) {
      return false
    }
    else {
      this.database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction: []
      }
      this.saveDetails()
      return true
    }
  }

  login(acno: any, password: any) {
    if (acno in this.database) {
      if (password == this.database[acno]["password"]) {
        this.currentUser = this.database[acno]["uname"]
        this.currentAccNo = acno
        this.saveDetails()
        return true
      }
      else {
        alert('Password Error')
        return false
      }
    }
    else {
      alert('Invalid User')
      return false
    }
  }

  deposit(acc: any, amount: any) {
    this.database[acc]['balance'] += amount
    this.currentBalance = this.database[acc].balance
    this.database[acc]['transaction'].push({
      type: "CREDIT",
      amount: amount
    })
    this.saveDetails()
    return this.database[acc]['balance']
  }

  withdraw(acc: any, amount: any) {
    if (this.database[acc]['balance'] >= amount) {
      this.database[acc]['balance'] -= amount
      this.currentBalance = this.database[acc].balance
      this.database[acc]['transaction'].push({
        type: "DEBIT",
        amount: amount
      })
      this.saveDetails()
      return this.database[acc]['balance']
    }
  }

  transaction(acno: any) {
    return this.database[acno].transaction
  }

  getBalance(acno: any) {
    console.log(this.database[acno].balance);
    return this.database[acno].balance
  }
}
