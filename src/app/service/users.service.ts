import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInfo} from "../model/userInfo";
import {UserStatus} from "../model/userStatus";
import {AuthService} from "../authority/service/auth.service";
import {User} from "../model/user";
import {UserInfoDTO} from "../model/userInfoDTO";
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  findAll(): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>("http://localhost:8080/api/users")
  }

  banUser(id: number): Observable<UserStatus> {
    console.log(id)
    return this.httpClient.get<UserStatus>("http://localhost:8080/api/users/ban/" + id)
  }

  activeUser(id: number): Observable<UserStatus> {
    console.log(id)
    return this.httpClient.get<UserStatus>("http://localhost:8080/api/users/active/" + id)
  }

  findCurrentUser(): Observable<UserInfoDTO> {
    return this.httpClient.get<UserInfoDTO>('http://localhost:8080/api/users/' + this.authService.currentUserValue?.id)
  }

  updateUser( user: UserInfoDTO): Observable<UserInfoDTO> {
    return this.httpClient.put<UserInfoDTO>("http://localhost:8080/api/users/" + user.id, user);
  }
  uploadImgUser(img:string, id: any): Observable<UserInfoDTO>{
    return this.httpClient.patch("http://localhost:8080/api/users/avatar/" + id,img)
  }
 verify(token:String){
    return this.httpClient.get<Message>("http://localhost:8080/api/token/verify?"+"token="+token)
 }
}