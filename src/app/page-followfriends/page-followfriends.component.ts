import { Component, OnInit } from '@angular/core';
import {FollowRelationData} from "../model/follow-relation-data";
import {FollowService} from "../service/follow.service";
import {Router} from "@angular/router";
import {UserPageComponent} from "../user-page/user-page.component";

@Component({
  selector: 'app-page-followfriends',
  templateUrl: './page-followfriends.component.html',
  styleUrls: ['./page-followfriends.component.scss']
})
export class PageFollowfriendsComponent implements OnInit {

  followRelationData = Array<FollowRelationData>();
  errorMessage!: string;

  constructor(private followService: FollowService, private router: Router) { }

  ngOnInit(): void {
    this.getAllLoggedInUserFollows()
  }

  // get all users that the current user follows
  // set an error message if the user does not follow anyone
  getAllLoggedInUserFollows() {
    this.followService.getAllUserFollows().subscribe(
      data => {
        this.followRelationData = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'You do not follow anyone!';
      }
    );
  }

  // delete a follow relation to a user and reload the followRelationData Array by calling the ngOnInit method
  deleteFollowRelation(username: string) {
    this.followService.deleteFollowRelation(username).subscribe(
      data => {
        this.ngOnInit()
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  // navigate to main page
  backToMainPage() {
    this.router.navigate(['mainpage']);
  }

  // navigate to a user page
  goToUserPage(username: string) {
    UserPageComponent.username = username;
    this.router.navigate(['/userpage'])
  }
}
