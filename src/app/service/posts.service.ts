import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public createNewPost(newPost: Post): Observable<any> {
    return this.http.post<any>("http://localhost:8082/userpost/newPost", newPost)
  }

  public getPosts(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/userpost/user")
  }


  public deletePost(postID: number): Observable<any> {
    return this.http.delete("http://localhost:8082/userpost/deletePost/" + postID)
  }

  public findPostsByUsername(username: string): Observable<any> {
    return this.http.get<any>("http://localhost:8082/userpost/user/" + username)
  }

  public findFirstPostOfUser(username: string): Observable<any> {
    return this.http.get<any>("http://localhost:8082/userpost/find/firstPost/" + username);
  }

  public updateUsername(username: string): Observable<any> {
    return this.http.put<any>("http://localhost:8082/userpost/updateUsername", username);
  }
}
