import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchForUserMatch(search: string): Observable<any> {
    return this.http.get<any>("http://localhost:8083/search/searchUserForMatch/" + search)
  }

  public searchForPostMatch(search: string): Observable<any> {
    return this.http.get<any>("http://localhost:8083/search/searchUserPostForMatch/" + search)
  }
}
