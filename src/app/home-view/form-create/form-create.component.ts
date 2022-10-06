import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../service/blogs.service";
import {BlogDTO} from "../../model/blogDTO";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  editorStyle = {
    height: '600px'
  }
  selectedImages: any[] = []
  213: 'uploadFireBase';

  downloadURL: Observable<string> | undefined
  fb: any
  listURL: any[] = []


  username = new FormControl('')
  categories:Category[]
  category = new FormControl('')
  title = new FormControl('')
  description = new FormControl('')
  content = new FormControl('' ,[Validators.required , Validators.maxLength(100000000000000000)])
  picture = ""
  createAt = new FormControl('')
  status = new FormControl('')
  countLike = new FormControl('')
  updateAt = new FormControl('')


  formCreateBlog = this.formGroup.group({
    username: this.username,
    category: {
      id: this.category
    },
    title: this.title,
    description: this.description,
    content: this.content,
    picture: this.picture,
    createAt: this.createAt,
    status: this.status,
    countLike: this.countLike,
    updateAt: this.updateAt

  })

  constructor(private blogsService: BlogsService,
              private formGroup: FormBuilder,
              private storage: AngularFireStorage,
              private categoryService : CategoryService) {
    this.categories=[]
    categoryService.findAll().subscribe(result=>{
      this.categories=result
      console.log(result)
    })
console.log(this.formCreateBlog)
  };


  ngOnInit(): void {
  }

  createBlog() {

    let blog:BlogDTO = {
      username: this.formCreateBlog.value.username,
      category: {
        // @ts-ignore
        id :this.formCreateBlog.value.category

      },
      title: this.formCreateBlog.value.title,
      description: this.formCreateBlog.value.description,
      content: this.formCreateBlog.value.content,
      picture: this.picture,
      createAt: this.formCreateBlog.value.createAt,
      status: this.formCreateBlog.value.status,
      countLike:Number( this.formCreateBlog.value.countLike),
      updateAt: this.formCreateBlog.value.updateAt
    }
    console.log(blog)
    this.blogsService.createBlog(blog).subscribe(value => {
      alert("Tạo thành công")
    })
  }

  test(){
    console.log(this.category)
  }

  createImage() {
    if (this.selectedImages.length !== 0){
      let URLs = []
      for (let i = 0; i < this.selectedImages.length; i++) {
        let selectedImage = this.selectedImages[i];
        var n = Date.now();
        const filePath = `Images/${n}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
          finalize(() =>{
            fileRef.getDownloadURL().subscribe(url => {
              this.picture = url
              console.log(this.picture)
              this.listURL.push(url)

            });
          })
        ).subscribe()
      }   }
  }

  showPreview(event: any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages = event.target.files;
      console.log(this.selectedImages)
    }else {
      this.selectedImages = []
    }
    this.createImage();
  }



}
