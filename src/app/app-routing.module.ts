import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginSuccessComponent} from "./login-success/login-success.component";
import {RegistrationComponent} from "./registration/registration.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'loginsuccess', component:LoginSuccessComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'posts', component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
