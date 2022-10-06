import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../authority/service/auth.service";
import {UsersService} from "../../service/users.service";
import {UserInfoDTO} from "../../model/userInfoDTO";
import {UserProfileComponent} from "../user-profile/user-profile.component";


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
  goToProfile(selected:number){
    if(selected==0){
      this.router.navigate(["/home/userprofile1",selected])}
    else if(selected==1){
      this.router.navigate(["/home/userprofile2",selected])}
    else if(selected==2){
      this.router.navigate(["/home/userprofile3",selected])}
    else if(selected==3){
      this.router.navigate(["/home/userprofile4",selected])}
  }
}


