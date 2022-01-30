import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserFollowboxComponent} from "../user-followbox/user-followbox.component";
import {FollowService} from "../service/follow.service";
import {FollowRelationData} from "../model/follow-relation-data";
import {PostsService} from "../service/posts.service";
import {Post} from "../model/post";
import {UserPageComponent} from "../user-page/user-page.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  postList = new Map<string, Post>();

  constructor(private router: Router, private followService: FollowService, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.getFirstPostOfFollows();
  }

  // retrieve the last post of every user that the current user follows
  getFirstPostOfFollows() {
    let followRelationData = Array<FollowRelationData>();
    // get all user that the current user follows
    this.followService.getAllUserFollows().subscribe(
      data => {
        followRelationData = data;
        // iterate through the users and get the last post of every user
        for (let i = 0; i < followRelationData.length; i++) {
          this.postService.findFirstPostOfUser(followRelationData[i].username).subscribe(
            data => {
              this.postList.set(followRelationData[i].username, data);
            },
            error => {
              console.log('no posts found');
            }
          );
        }
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  // navigate to different webpages
  backToLogin() {
    this.router.navigate(['/login']);
  }

  goToPosts() {
    this.router.navigate(['/posts'])
  }

  goToFollowme(){
    UserFollowboxComponent.helper = false;
    this.router.navigate(['/followme'])
  }

  goToFollowfriends(){
    UserFollowboxComponent.helper = true;
    this.router.navigate(['/followfriends'])
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  goToUserPage(username: string) {
    UserPageComponent.username = username;
    this.router.navigate(['/userpage'])
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }
}
