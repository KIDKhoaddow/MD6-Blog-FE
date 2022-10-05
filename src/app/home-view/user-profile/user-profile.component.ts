import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../service/users.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserInfoDTO} from "../../model/userInfoDTO";
import Swal from "sweetalert2";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {AuthService} from "../../authority/service/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  idUpdate = 0
  ava?: string | null
  uploadedImage: File | undefined;
  imageFile!: any;
  imageSrc: string = "";


  name = new FormControl('')
  email = new FormControl('', [Validators.required, Validators.email])
  avatar?: string = ""
  about = new FormControl('')
  birthday = new FormControl('')
  registerDate = new FormControl('')
  username: string | null | undefined = ""

  formUpdateUser = this.formGroup.group({
    id: this.idUpdate,
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    about: this.about,
    birthDay: this.birthday,
    registerDate: this.registerDate,
    username: this.username
  })



  constructor(private userService: UsersService,
              private formGroup: FormBuilder,
              private storage: AngularFireStorage,
              private  authService:AuthService) {
    this.getUser()
  }


  ngOnInit(): void {
  }

  getUser() {
    this.userService.findCurrentUser().subscribe(value => {
      this.formUpdateUser.patchValue(value)
      this.ava = value.avatar
      if(value.avatar){
        this.imageSrc=value.avatar
      }
      this.username=value.username
      // this.formUpdate.patchValue(this.userUpdate)
      console.log(value)
    })
  }



  updateUsers() {
    let users: UserInfoDTO = {
      id: this.formUpdateUser.value.id,
      username: this.formUpdateUser.value.username,
      name: this.formUpdateUser.value.name,
      email: this.formUpdateUser.value.email,
      avatar: this.formUpdateUser.value.avatar,
      about: this.formUpdateUser.value.about,
      birthDay: this.formUpdateUser.value.birthDay,
      registerDate: this.formUpdateUser.value.registerDate,
    }
    this.userService.updateUser(users).subscribe(value => {
      this.formUpdateUser.patchValue(value)
      this.ava = value.avatar
      Swal.fire({
        icon: 'success',
        title: 'Update complete',
        timer: 1500
      })
    })
  }

  showPreview(event: any) {
    this.imageFile = event.target.files[0]
    this.submitImage(event.target.files[0]);
  }

  submitImage(file:any) {
    if (this.imageFile != null) {
      const fileName = this.imageFile.name;
      const fileRef = this.storage.ref(fileName);
      // @ts-ignore
      Swal.fire({
        title: 'Loading...',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          this.storage.upload(fileName, this.imageFile).snapshotChanges().pipe(
            finalize(() => (fileRef.getDownloadURL().subscribe(url => {
              this.imageSrc = url;
              Swal.close();
            })))
          ).subscribe();
        }
      }).then();
    }
  }

  uploadImgUser() {
    this.userService.uploadImgUser(this.imageSrc, this.authService.currentUserValue!.id).subscribe(() =>
      Swal.fire({
        icon: 'success',
        title: 'Update complete',
        timer: 1500
      })
    );
  }
}
