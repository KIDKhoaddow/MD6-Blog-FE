import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserInfo} from "../../../model/userInfo";
import {UsersService} from "../../container/service/users.service";


@Component({
  selector: 'app-user-ban-active-dialog',
  templateUrl: './user-ban-active-dialog.component.html',
  styleUrls: ['./user-ban-active-dialog.component.css']
})
export class UserBanActiveDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserBanActiveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInfo,
              private userService: UsersService) {
  }

  ngOnInit(): void {
  }
  banUser(userInfo: UserInfo) {
    this.userService.banUser(userInfo.id).subscribe(compileResults=>{
      console.log(compileResults)
    })
    this.dialogRef.close("ok")
  }
  active(userInfo:UserInfo){
     this.userService.activeUser(userInfo.id).subscribe(compileResults=>{
      console.log(compileResults)
    })
    this.dialogRef.close("ok")
  }
}
