import { Component, OnInit } from '@angular/core';
import {FollowRelationData} from "../model/follow-relation-data";
import {FollowService} from "../service/follow.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-followme',
  templateUrl: './page-followme.component.html',
  styleUrls: ['./page-followme.component.scss']
})
export class PageFollowmeComponent implements OnInit {

  followRelationData = Array<FollowRelationData>();

  constructor(private followService: FollowService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFollowUser()
  }

  getAllFollowUser() {
    this.followService.getAllFollowUser().subscribe(
      data => {
        this.followRelationData = data;
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  backToMainPage() {
    this.router.navigate(['mainpage']);
  }
}
