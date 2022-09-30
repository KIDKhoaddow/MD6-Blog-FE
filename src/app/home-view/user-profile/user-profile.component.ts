import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../service/users.service";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {UserInfo} from "../../model/userInfo";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name = new FormControl('')
  email = new FormControl('',[Validators.required,Validators.email])
  avatar = new FormControl('')
  about = new FormControl('')
  birthday = new FormControl('')
  registerDate = new FormControl('')
  username = new FormControl('')

  formUpdateUser = this.formGroup.group({
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    about: this.about,
    birthday: this.birthday,
    registerDate: this.registerDate,
    username: this.username
  })

  constructor(private userService: UsersService,
              private formGroup: FormBuilder) {
    this.updateUser()
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.userService.findCurrentUser().subscribe(value => {
      this.name.setValue( value.name)
      this.email.setValue( value.email)
      this.avatar.setValue(value.avatar)
      this.about.setValue( value.about)
      this.birthday.setValue( value.birthDay)
      this.registerDate.setValue(value.registerDate.toString())
      this.username.setValue(value.user.username)
      this.name.setValue(value.name)
      console.log(this.formUpdateUser)
      // this.formUpdate.patchValue(this.userUpdate)
      console.log(value)
    })
  }

}
