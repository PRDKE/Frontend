import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post";
import {DeletePost} from "../model/delete-post";
import {PostsService} from "../service/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

  @Input() postId!: number;
  @Input() username!: string;
  @Input() message!: string;
  @Input() img!: string;
  @Input() datePosting!: Date;

  deletePost = new DeletePost();

  constructor(private service: PostsService, private router: Router) {
  }

  deletePostMethod() {
    this.deletePost.username = this.username;
    this.deletePost.postId = this.postId;
    /*
    this.service.deletePost(this.deletePost);
     */
  }



  ngOnInit(): void {
  }

}
