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

  deleteFollowRelation(username: string) {
    this.followService.deleteFollowRelation(username).subscribe(
      data => {
        this.ngOnInit()
        console.log('response');
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  backToMainPage() {
    this.router.navigate(['mainpage']);
  }

  goToUserPage(username: string) {
    UserPageComponent.username = username;
    this.router.navigate(['/userpage'])
  }
}
