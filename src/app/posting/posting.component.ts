import {Component, Input, OnInit} from '@angular/core';
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
  @Input() delete!: boolean;

  constructor(private service: PostsService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.message);
    console.log(this.username);
  }

  // delete a post by postID
  deletePostMethod() {
    this.service.deletePost(this.postId).subscribe(
      data => {
        this.router.navigate(['/posts'])
      },
      error => {
        console.log("exception occurred");
      }
    );
  }
}
