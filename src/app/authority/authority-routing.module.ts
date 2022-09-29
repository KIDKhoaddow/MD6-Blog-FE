import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {LayoutComponent} from "./layout/layout.component";
import {PasswordMatchValidatorRevealedDirective} from "../model/passwordMatchValidator-revealed.directive";


const authorityRoutes: Routes = [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forChild(authorityRoutes)],
  declarations: [


  ],
  exports: [RouterModule]
})
export class AuthorityRoutingModule {

}