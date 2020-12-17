import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
      },{
        path: 'signin',
        loadChildren: './signin/signin.module#SigninModule'
      },{
        path: 'forgot-password',
        loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
      }
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
