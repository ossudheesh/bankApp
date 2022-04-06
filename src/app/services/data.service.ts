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
}
