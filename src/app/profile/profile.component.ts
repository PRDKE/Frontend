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

  // find the user information of the current logged-in user
  findUser() {
    this.userService.findLoggedInUser().subscribe(
      data => {
        this.user = data;
        this.currentUsername = this.user.username;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'User not found!';
      }
    )
  }

  // update the user information with the new inputs
  // go back to the login-page (logout) so that the user needs to enter his username and
  // password again and a new jwt with the actual username information get set in the header
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

  // update the username in the mongoDB 'post' database of a document
  updateUsernameInPostDatabase() {
    this.postService.updateUsername(this.user.username).subscribe(
      data => {
        console.log('Username updated!');
      },
      error => {

      }
    )
  }

  // update the username of the neo4J database
  updateUsernameInFollowDatabase() {
    this.followService.updateUsername(this.user.username).subscribe(
      data => {
        console.log('Username updated!');
      },
      error => {

      }
    )
  }

  // navigate to the login page
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // navigate to the main page
  backToMainPage() {
    this.router.navigate(['mainpage']);
  }
}
