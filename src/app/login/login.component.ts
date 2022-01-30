import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {PostsComponent} from "../posts/posts.component";
import {UsermanagementService} from "../service/usermanagement.service";
import {JwtTokenModel} from "../model/JwtTokenModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  message!: string;
  jwtToken!: JwtTokenModel;

  constructor(private service: UsermanagementService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // login a user as
  // navigate to the main page if username and password are correct
  // throw an error if username or password are wrong
  loginUser() {
    this.service.loginUserRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.jwtToken = data;
        // set jwt as 'Authorization'
        localStorage.setItem('Authorization', this.jwtToken.jwtToken);
        this.router.navigate(['/mainpage'])
      },
      error => {
        console.log("exception occured")
        this.message="Wrong username or password"
      }
    );
  }

  // navigate to the 'registration' webpage
  goToRegistration() {
    this.router.navigate(['/registration'])
  }
}
