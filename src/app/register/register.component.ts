import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registration model
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accNo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private db: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register() {
    let uname = this.registerForm.value.uname
    let accNo = this.registerForm.value.accNo
    let pwd = this.registerForm.value.pwd
    if (this.registerForm.valid) {
      const result = this.db.register(uname, accNo, pwd)
      result ? this.router.navigateByUrl('') : alert('User already exists ')
    }
    else {
      alert('invalid form')
    }
  }

}
