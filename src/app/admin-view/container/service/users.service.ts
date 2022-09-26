import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInfo} from "../../../model/userInfo";
import {UserStatus} from "../../../model/userStatus";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>("http://localhost:8080/admin/users")
  }

  banUser(id: number): Observable<UserStatus> {
    return this.httpClient.get<UserStatus>("http://localhost:8080/admin/banUser/" + id)
  }
  activeUser( id: number): Observable<UserStatus> {
    return this.httpClient.get<UserStatus>("http://localhost:8080/admin/activeUser/" + id)
  }

}
