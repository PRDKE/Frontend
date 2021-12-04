import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  message!: string;

  constructor(private service: UsermanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.service.registerUserRemote(this.user).subscribe(
      data => {
        this.router.navigate(['/login'])
      },
      error => {
        this.message="This username already exists.";
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

}
