import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserStatus} from "../../model/userStatus";
import {environment} from "../../../environments/environment";
import {Message} from "../../model/message";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  localhost = environment.localhost
  private currentUserSubject?: BehaviorSubject<User> | null;
  public currentUser?: Observable<User>;
  update = new EventEmitter<string>();
  isLoggedIn = false;
  redirectUrl: string | null = null;


  constructor(private http: HttpClient) {
    // @ts-ignore
    let json = JSON.parse(localStorage.getItem("currentUser"))
    this.currentUserSubject = new BehaviorSubject<User>(json);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | undefined {
    return this.currentUserSubject?.value;
  }


  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:8080/login', {username, password}).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject?.next(user)
        this.update.emit('login')
        this.isLoggedIn = true
        return user;
      })
    )
  }

  logout() {
    // @ts-ignore
    return this.http.get<UserStatus>("http://localhost:8080/logout/" + this.currentUserValue?.id).subscribe(
      userStatus => {
        localStorage.removeItem("currentUser");
        // @ts-ignore
        this.currentUserSubject?.next(null);
        console.log(userStatus)
        this.isLoggedIn = false
        return userStatus
      })
  }

  register(username: string, password: string, confirmPassword: string) {
    let user = {
      username: username,
      password: password,
      confirmPassword: confirmPassword
    }
    return this.http.post<Message>("http://localhost:8080/register", user).pipe(map(result=>{
      console.log(result.message)
      return result.message;
    }))
  }
}
