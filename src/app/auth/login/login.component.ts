import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailrgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  ziprgx=/(^\d{5}$)|(^\d{5}-\d{4}$)/;
  constructor(private formBuilder:FormBuilder,private authService:AuthService) {}

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(this.emailrgx), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),Validators.required])]
      
    })
  }

   

  onSubmit(){
   this.authService.login({
     email:this.loginForm.value.email,
     password:this.loginForm.value.password
    })
    
   };


}
  


