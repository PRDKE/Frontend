import {Component, OnInit} from '@angular/core';
import {PostsService} from "../service/posts.service";
import {Post} from "../model/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  static username: string;
  postUsername!: string;
  post = new Post();
  postList: Array<Post> = [];
  emojis: Array<any> = ['Grinning Face', 'Sad Face', 'Bored Face'];

  constructor(private service: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
    if (PostsComponent.username === undefined) {
      this.router.navigate(['login']);
    }
    this.postUsername = PostsComponent.username;
  }

  makeNewPost() {
    this.service.createNewPost(this.post).subscribe(
      data => {
        console.log("response received");
        this.getPosts();
      },
      error => {
        console.log("exception occurred");
      }
    );
  }

  getPosts() {
    this.service.getPosts().subscribe(
      data => {
        this.postList = data;
        console.log(data);
        console.log("response received");
      },
      error => {
        console.log("exception occurred");
      }
    );
    for (let i = 0; i < this.postList.length; i++) {
      console.log(this.postList[i].localDateTime)
    }
    console.log('test')
  }

  deletePostMethod(postId: any) {
    this.service.deletePost(postId).subscribe(
      data => {
        // this.router.navigate(['/posts']);
        this.ngOnInit();
      },
      error => {
        console.log("exception occurred");
      }
    );
  }

  backToMainPage() {
    this.router.navigate(['mainpage']);
  }
}
