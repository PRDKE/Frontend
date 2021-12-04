import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {PostsComponent} from "../posts/posts.component";
import {UsermanagementService} from "../service/usermanagement.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  message!: string;

  test = "test";

  constructor(private service: UsermanagementService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.service.loginUserRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured")
        this.message="Wrong username or password"
      }
    );
    PostsComponent.username = this.user.username;
  }

  goToRegistration() {
    this.router.navigate(['/registration'])
  }
}
