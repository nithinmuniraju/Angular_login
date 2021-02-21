import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reqBodyObj = {
    "first_name": "new",
    "last_name": "new two",
    "email": "tytrtr@new.com",
    "password": "Pas$w0rd",
    "mobile_no": "23434234324",
    "address": "test address"
  }
  constructor(private router: Router, private registerService: AuthService) {
    console.log('in register');
    this.registerService.register(this.reqBodyObj).subscribe(data => {
      console.log("data ***",data)
    });
   }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate([''])
  }

  submitRegister() {
    // const reqBodyObj = {
    //   "first_name": "new",
    //   "last_name": "new two",
    //   "email": "blue@new.com",
    //   "password": "Pas$w0rd",
    //   "mobile_no": "23434234324",
    //   "address": "test address"
    // }
    this.registerService.register(this.reqBodyObj);
  }
}
