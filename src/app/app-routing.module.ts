import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {PostsComponent} from "./posts/posts.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {PageFollowfriendsComponent} from "./page-followfriends/page-followfriends.component";
import {PageFollowmeComponent} from "./page-followme/page-followme.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'mainpage', component:MainPageComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'posts', component:PostsComponent},
  {path:'followfriends', component:PageFollowfriendsComponent},
  {path:'followme', component:PageFollowmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
