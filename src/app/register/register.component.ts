import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registration model
  registerForm=this.fb.group({
    uname:[''],
    accNo:[''],
    pwd:['']
  })

  constructor(private db: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register() {
    let uname = this.registerForm.value.uname
    let accNo = this.registerForm.value.accNo
    let pwd = this.registerForm.value.pwd
    const result = this.db.register(uname, accNo, pwd)
    result ? this.router.navigateByUrl('') : alert('User already exists ')
  }

}
