import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../service/posts.service";
import {Post} from "../model/post";
import {Router} from "@angular/router";
import {NewPost} from "../model/new-post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  static username: string;
  newPost = new NewPost();
  post = new Post();
  postList: Array<Post> = [];
  emojis: Array<any> = ['Grinning Face', 'Sad Face', 'Bored Face'];

  constructor(private service: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
    if (PostsComponent.username === undefined) {
      this.router.navigate(['login']);
    }
  }

  makeNewPost() {
    this.newPost.username = PostsComponent.username;
    this.newPost.post = this.post;
    this.service.createNewPost(this.newPost).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['loginsuccess']);
      },
      error => {
        console.log("exception occured");
      }
    );
  }

  getPosts() {
    this.newPost.username = PostsComponent.username;
    this.service.getPosts(this.newPost.username).subscribe(
      data => {
        this.postList = data;
        console.log("response recieved");
      },
      error => {
        console.log("exception occured");
      }
    );
  }

  backToMainPage() {
    this.router.navigate(['loginsuccess']);
  }
}
