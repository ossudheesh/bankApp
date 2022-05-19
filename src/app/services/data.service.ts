import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any
  currentAccNo: any
  currentBalance: any

  // database: any = {
  //   1000: { acno: 1000, uname: "abin", password: 1000, balance: 5000, transaction: [] },
  //   1001: { acno: 1001, uname: "anu", password: 1001, balance: 4000, transaction: [] },
  //   1002: { acno: 1002, uname: "jith", password: 1002, balance: 3000, transaction: [] },
  // }

  constructor(private http: HttpClient) {
    // this.getDetails()
  }

  // to save details on localStorage
  // saveDetails() {
  //   localStorage.setItem("database", JSON.stringify(this.database))
  //   if (this.currentAccNo) {
  //     localStorage.setItem("currentAccNo", JSON.stringify(this.currentAccNo))
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  //   }
  // }
  // to get details from localStorage
  // getDetails() {
  //   if (localStorage.getItem("database")) {
  //     this.database = JSON.parse(localStorage.getItem("database") || '')
  //   }
  //   if (localStorage.getItem("currentAccNo")) {
  //     this.currentAccNo = JSON.parse(localStorage.getItem("currentAccNo") || '')
  //   }
  //   if (localStorage.getItem("currentUser")) {
  //     this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
  //   }
  // }



  register(uname: any, acno: any, password: any) {
    const data = {
      uname,
      acno,
      password
    }
    return this.http.post('http://localhost:3000/register', data)
  }

  login(acno: any, password: any) {
    const data = {
      acno,
      password
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  deposit(acno: any, password: any, amount: any) {
    const data = {
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/deposit', data, this.getOptions())
  }

  getOptions() {
    // to fetch token 
    const token = JSON.parse(localStorage.getItem('token') || '')
    // to create http header 
    let headers = new HttpHeaders()
    // add token to req header 
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers
    }
    return options
  }


  withdraw(acno: any, password: any, amount: any) {
    const data = {
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/withdraw', data, this.getOptions())
  }

  transaction(acno: any) {
    const data = {
      acno
    }

    return this.http.post('http://localhost:3000/transaction', data, this.getOptions())
  }

  // getBalance(acno: any) {
  //   console.log(this.database[acno].balance);
  //   return this.database[acno].balance
  // }
  onDelete(acno: any) {
    return this.http.delete('http://localhost:3000/onDelete/' + acno, this.getOptions())
  }
}
