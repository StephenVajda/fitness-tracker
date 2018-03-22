import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {TrainingComponent} from './training/training/training.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';


const routes:Routes=[
    {path:'',component:WelcomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'training',component:TrainingComponent},
    {path:'login',component:LoginComponent}];

@NgModule({
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule{




}