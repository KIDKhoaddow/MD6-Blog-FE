import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../authority/service/auth.service";
import {UsersService} from "../../service/users.service";
import {UserInfoDTO} from "../../model/userInfoDTO";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  hide = false;
  userInfoCurrent?: UserInfoDTO;

  constructor(private router: Router,
              private authService: AuthService, private userService: UsersService) {
    if (authService.currentUserValue == null) {
      this.hide = false;
    } else {
      this.hide = true
      this.userService.findCurrentUser().subscribe(userInfo => {
        this.userInfoCurrent = userInfo
        // @ts-ignore
        document.getElementById("avatar").setAttribute("src", this.userInfoCurrent?.avatar)
      })
    }
  }

  ngOnInit(): void {
    document.body.style.background = "#f8f9fb"
  }


  logout() {
    console.log(this.authService.logout())
    window.location.reload();
  }
  goToProfile(){
    this.router.navigateByUrl("/home/userprofile")
  }
}


