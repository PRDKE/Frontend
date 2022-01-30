import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";
import {FollowService} from "../service/follow.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  message!: string;

  constructor(private registrationService: UsermanagementService, private followService: FollowService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // create a new user in the mariaDB database and the neo4J database
  registerUser() {
    this.registrationService.registerUserRemote(this.user).subscribe(
      data => {
        // navigate to login
        this.router.navigate(['/login'])
      },
      error => {
        this.message="This username already exists.";
      }
    );

    this.followService.createNewFollowRelationData(this.user.username).subscribe(
      data => {
        console.log("ABC");
      },
      error => {
        console.log("ERROR");
      }
    );
  }

  // navigate to the login page
  goToLogin() {
    this.router.navigate(['/login'])
  }

}
