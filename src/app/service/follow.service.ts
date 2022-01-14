import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  public createNewFollowRelationData(username: string): Observable<any> {
    return this.http.post<any>("http://localhost:8081/relation/add", username);
  }

  public createNewFollowRelation(secondUser: string): Observable<any> {
    return this.http.post<any>("http://localhost:8081/relation/followRelation", secondUser);
  }

  public deleteFollowRelation(secondUser: string): Observable<any> {
    return this.http.delete<any>("http://localhost:8081/relation/deleteFollowRelation/" + secondUser);
  }

  public getAllUserFollows(): Observable<any> {
    return this.http.get<any>("http://localhost:8081/relation/follows");
  }

  public getAllFollowUser(): Observable<any> {
    return this.http.get<any>("http://localhost:8081/relation/follow");
  }

  public updateUsername(username: string): Observable<any> {
    return this.http.put<any>("http://localhost:8081/relation/updateUsername", username);
  }
}
