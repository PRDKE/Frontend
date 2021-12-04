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
}
