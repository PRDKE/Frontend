import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http: HttpClient) { }

  public loginUserRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", user)
  }

  public registerUserRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/new", user)
  }

  public findUserByUsername(username: string): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/" + username)
  }

  public findLoggedInUser(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/user")
  }

  public updateUserInformation(user: User): Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/update", user)
  }
}
