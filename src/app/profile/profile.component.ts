import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsermanagementService} from "../service/usermanagement.service";
import {Router} from "@angular/router";
import {PostsService} from "../service/posts.service";
import {FollowService} from "../service/follow.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;
  currentUsername!: string;
  errorMessage!: string;

  constructor(private userService: UsermanagementService, private postService: PostsService, private followService: FollowService, private router: Router) {  }

  ngOnInit(): void {
    this.findUser();
  }

  findUser() {
    this.userService.findLoggedInUser().subscribe(
      data => {
        this.user = data;
        this.currentUsername = this.user.username;
        console.log(data);
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'User not found!';
      }
    )
  }

  changeUserInformation() {
    this.userService.updateUserInformation(this.user).subscribe(
      data => {
        this.user = data;
        this.updateUsernameInPostDatabase();
        this.updateUsernameInFollowDatabase();
        this.goToLogin();
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Username already exists!';
      }
    )
  }

  updateUsernameInPostDatabase() {
    this.postService.updateUsername(this.user.username).subscribe(
      data => {
        console.log('Username updated!');
      },
      error => {

      }
    )
  }

  updateUsernameInFollowDatabase() {
    this.followService.updateUsername(this.user.username).subscribe(
      data => {
        console.log('Username updated!');
      },
      error => {

      }
    )
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  backToMainPage() {
    this.router.navigate(['mainpage']);
  }
}
