import {Component, OnInit} from '@angular/core';
import {UsermanagementService} from "../service/usermanagement.service";
import {User} from "../model/user";
import {PostsService} from "../service/posts.service";
import {Post} from "../model/post";
import {Router} from "@angular/router";
import {FollowRelationData} from "../model/follow-relation-data";
import {FollowService} from "../service/follow.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  static username: string;
  currentUser!: string;
  user: User;
  posts = Array<Post>();
  followRelationData = Array<FollowRelationData>();
  loggedInUserFollows!: boolean;
  errorMessageUser!: string;
  errorMessagePost!: string;

  constructor(private usermanagementService: UsermanagementService,
              private userPostService: PostsService,
              private followRelationService: FollowService,
              private router: Router) {
    this.user = new User;
  }

  ngOnInit(): void {
    if (UserPageComponent.username === undefined) {
      this.router.navigate(['mainpage']);
    }
    this.currentUser = UserPageComponent.username;
    this.findAllLoggedInUserFollows();
    this.findUserInformation();
    this.findUserPosts();
  }

  findUserInformation() {
    this.usermanagementService.findUserByUsername(this.currentUser).subscribe(
      data => {
        this.user = data;
        this.errorMessageUser = '';
      },
      error => {
        this.errorMessageUser = 'user could not be found!'
      }
    );
  }

  findUserPosts() {
    this.userPostService.findPostsByUsername(this.currentUser).subscribe(
      data => {
        this.posts = data;
        this.errorMessagePost = '';
      },
      error => {
        this.errorMessagePost = 'no posts found';
      }
    );
  }

  findAllLoggedInUserFollows() {
    this.followRelationService.getAllUserFollows().subscribe(
      data => {
        this.followRelationData = data;
        for (let i = 0; i < this.followRelationData.length; i++) {
          if (this.followRelationData[i].username === this.currentUser) {
            this.loggedInUserFollows = true;
            break;
          }
          else {
            this.loggedInUserFollows = false;
          }
        }
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  createFollowRelation() {
    this.followRelationService.createNewFollowRelation(UserPageComponent.username).subscribe(
      data => {
        this.loggedInUserFollows = true;
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  deleteFollowRelation() {
    this.followRelationService.deleteFollowRelation(UserPageComponent.username).subscribe(
      data => {
        this.loggedInUserFollows = false;
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  backToMainPage() {
    this.router.navigate(['mainpage']);
    UserPageComponent.username = '';
  }
}
