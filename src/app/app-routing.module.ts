import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {PostsComponent} from "./posts/posts.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'mainpage', component:MainPageComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'posts', component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
