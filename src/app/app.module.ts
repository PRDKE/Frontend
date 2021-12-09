import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { MainPageHeaderComponent } from './main-page-header/main-page-header.component';
import { PageFollowmeComponent } from './page-followme/page-followme.component';
import { PageFollowfriendsComponent } from './page-followfriends/page-followfriends.component';
import { HeaderLightblueComponent } from './header-lightblue/header-lightblue.component';
import { UserFollowboxComponent } from './user-followbox/user-followbox.component';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PostsComponent,
    MainPageComponent,
    LoginHeaderComponent,
    MainPageHeaderComponent,
    PageFollowmeComponent,
    PageFollowfriendsComponent,
    HeaderLightblueComponent,
    UserFollowboxComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
