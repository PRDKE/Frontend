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

  followRelationData = Array<FollowRelationData>();
  postList = new Map<string, Post>();

  constructor(private router: Router, private followService: FollowService, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.getFirstPostOfFollows();
  }

  // getAllLoggedInUserFollows() {
  //   // let followRelationData = Array<FollowRelationData>();
  //   this.followService.getAllUserFollows().subscribe(
  //     data => {
  //       this.followRelationData = data;
  //     },
  //     error => {
  //       console.log('no followRelationData found');
  //     }
  //   );
  //   console.log(this.followRelationData);
  // }

  getFirstPostOfFollows() {
    let followRelationData = Array<FollowRelationData>();
    this.followService.getAllUserFollows().subscribe(
      data => {
        followRelationData = data;
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
