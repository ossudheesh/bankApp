import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=''
  accNo=''
  pwd=''
  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  register(){
    let uname=this.uname
    let accNo=this.accNo
    let pwd=this.pwd
    const result=this.db.register(uname,accNo,pwd)
    result?this.router.navigateByUrl(''):alert('User already exists ')
  }

}
