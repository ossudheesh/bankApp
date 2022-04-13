import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { acno: 1000, uname: "abin", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "anu", password: 1001, balance: 4000 },
    1002: { acno: 1002, uname: "jith", password: 1002, balance: 3000 },
  }

  constructor() { }

  register(uname: any, acno: any, password: any) {
    if (acno in this.database) {
      return false
    }
    else {
      this.database[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(this.database);

      return true
    }

  }
  login(acno: any, password: any) {



    if (acno in this.database) {
      if (password == this.database[acno]["password"]) {
        // alert('Login Successfull')
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
    return this.database[acc]['balance']
  }
  withdraw(acc: any, amount: any) {
    if (this.database[acc]['balance'] >= amount) {
      this.database[acc]['balance'] -= amount
      return this.database[acc]['balance']
    }
  }
}

