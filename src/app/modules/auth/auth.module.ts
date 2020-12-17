import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { SignupModule } from './signup/signup.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninModule } from './signin/signin.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module'

@NgModule({
    declarations: [AuthComponent],
    imports: [
        AuthRoutingModule,
        SignupModule,
        SigninModule,
        ForgotPasswordModule,
        FormsModule,
        NgbModule,
        SharedModule,
    ],
    providers: [],
})
export class AuthModule { }
