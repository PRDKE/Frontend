import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {SearchService} from "../service/search.service";
import {Router} from "@angular/router";
import {Post} from "../model/post";
import {UserPageComponent} from "../user-page/user-page.component";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  userList = Array<User>();
  noMatchingUserFound!: string;
  postList = new Map<string, Post>();
  noMatchingPostFound!: string;
  searchValue!: string;

  constructor(private service: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  searchForUserMatch() {
    console.log(this.searchValue)
    this.service.searchForUserMatch(this.searchValue).subscribe(
      data => {
        this.userList = data;
        console.log(this.userList)
        this.noMatchingUserFound = '';
      },
      error => {
        this.userList = new Array<User>();
        this.noMatchingUserFound = "No Matching User Found!";
        console.log("exception occurred");
      }
    );
  }

  searchForPostMatch() {
    console.log(this.searchValue)
    this.service.searchForPostMatch(this.searchValue).subscribe(
      data => {
        this.postList = data;
        this.noMatchingPostFound = '';
      },
      error => {
        this.postList = new Map<string, Post>();
        this.noMatchingPostFound = "No Matching Post Found!";
        console.log("exception occurred");
      }
    );
  }

  goToMainPage() {
    this.router.navigate(['/mainpage'])
  }

  goToUserPage(username: string) {
    UserPageComponent.username = username;
    this.router.navigate(['/userpage'])
  }
}
