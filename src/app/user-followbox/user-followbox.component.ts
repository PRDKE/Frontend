import {Component, Input, OnInit} from '@angular/core';
import {FollowService} from "../service/follow.service";
import {Router} from "@angular/router";
import {UserPageComponent} from "../user-page/user-page.component";

@Component({
  selector: 'app-user-followbox',
  templateUrl: './user-followbox.component.html',
  styleUrls: ['./user-followbox.component.scss']
})
export class UserFollowboxComponent implements OnInit {

  @Input() username!:string;
  static helper: boolean;
  currentHelper!: boolean;

  constructor(private followService: FollowService, private router: Router) { }

  ngOnInit(): void {
    this.currentHelper = UserFollowboxComponent.helper
  }

  deleteFollowRelation() {
    this.followService.deleteFollowRelation(this.username).subscribe(
      data => {
        console.log('response');
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  createFollowRelation() {
    this.followService.createNewFollowRelation(this.username).subscribe(
      data => {
        console.log('response');
      },
      error => {
        console.log('no followRelationData found');
      }
    );
  }

  goToUserPage(username: string) {
    UserPageComponent.username = username;
    this.router.navigate(['/userpage'])
  }
}
