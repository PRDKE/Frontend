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

  postUsername!: string;
  post = new Post();
  postList: Array<Post> = [];
  emojis: Array<any> = ['Grinning Face', 'Sad Face', 'Bored Face'];

  constructor(private service: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  // make a new post and call the 'getPosts()' method to reload the post-array
  makeNewPost() {
    this.service.createNewPost(this.post).subscribe(
      data => {
        this.getPosts();
      },
      error => {
        console.log("exception occurred");
      }
    );
  }

  // retrieve all post of the current logged-in user
  getPosts() {
    this.service.getPosts().subscribe(
      data => {
        this.postList = data;
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

  // delete a post by postID
  // reload the post array by calling the 'getPosts()' method
  deletePostMethod(postId: any) {
    this.service.deletePost(postId).subscribe(
      data => {
        this.getPosts();
      },
      error => {
        console.log("exception occurred");
      }
    );
  }

  // navigate to main page
  backToMainPage() {
    this.router.navigate(['mainpage']);
  }
}
