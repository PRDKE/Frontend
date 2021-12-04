import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewPost} from "../model/new-post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public createNewPost(newPost: NewPost): Observable<any> {
    return this.http.post<any>("http://localhost:8082/userpost/newPost", newPost)
  }

  public getPosts(username: string): Observable<any> {
    return this.http.get<any>("http://localhost:8082/userpost/user/" + username)
  }
}
