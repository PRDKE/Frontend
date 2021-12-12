import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewPost} from "../model/new-post";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  public createNewFollowRelationData(username: string): Observable<any> {
    return this.http.post<any>("http://localhost:8081/relation/add", username);
  }

    public createNewFollowRelation(firstuser: string, seconduser: string): Observable<any> {
      return this.http.post<any>("http://localhost:8081/relation/follow", (firstuser ) );
    }

}
