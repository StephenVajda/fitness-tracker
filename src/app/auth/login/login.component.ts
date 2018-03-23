import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailrgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  ziprgx=/(^\d{5}$)|(^\d{5}-\d{4}$)/;
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(this.emailrgx), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),Validators.required])
      
    })
  }

  lgoin() {
    console.log(this.loginForm);
  }
}
  


