import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../service/blogs.service";
import {BlogDTO} from "../../model/blog/blogDTO";
import {Category} from "../../model/category/category";
import {CategoryService} from "../../service/category.service";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {MyErrorStateMatcher} from "../../model/Validate/ErrorStateMatcher";
import {Blog} from "../../model/blog/blog";


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  minDescription = 50
  maxDescription = 100

  minTittle = 20
  maxTittle = 50

  blogDTOs?: Blog []

  editorStyle = {
    height: '600px'
  }
  selectedImages: any[] = []
  213: 'uploadFireBase';

  downloadURL: Observable<string> | undefined
  fb: any
  listURL: any[] = []

  categories: Category[]=[]
  category = new FormControl('', Validators.required)
  title = new FormControl(' ', [Validators.required, Validators.minLength(this.minTittle), Validators.maxLength(this.maxTittle)])
  description = new FormControl(' ', [Validators.required, Validators.minLength(this.minDescription), Validators.maxLength(this.maxDescription)])
  content = new FormControl(' ', [Validators.required, Validators.maxLength(100000000000000000)])
  picture = ""
  titleMatcher = new MyErrorStateMatcher()
  descriptionMatcher = new MyErrorStateMatcher()

  formCreateBlog = this.formGroup.group({
    category: this.category,
    title: this.title,
    description: this.description,
    content: this.content,
    picture: this.picture

  })

  constructor(private blogsService: BlogsService,
              private formGroup: FormBuilder,
              private storage: AngularFireStorage,
              private categoryService: CategoryService) {

  };


  ngOnInit(): void {
    this.categories = []
    this.categoryService.findAll().subscribe(result => {
      this.categories = result
      console.log(result)
    })
    console.log(this.formCreateBlog)
  }


  createBlog() {

    let blog: BlogDTO = {
      category: Number(this.formCreateBlog.value.category),
      title: this.formCreateBlog.value.title,
      description: this.formCreateBlog.value.description,
      content: this.formCreateBlog.value.content,
      picture: this.picture,
    }
    console.log(blog)
    this.blogsService.createBlog(blog).subscribe(value => {
      console.log(value)
    })
  }


  createImage() {
    if (this.selectedImages.length !== 0) {
      let URLs = []
      for (let i = 0; i < this.selectedImages.length; i++) {
        let selectedImage = this.selectedImages[i];
        var n = Date.now();
        const filePath = `Images/${n}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.picture = url
              console.log(this.picture)
              this.listURL.push(url)
              console.log(url)
            });
          })
        ).subscribe()
      }
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages[0] = event.target.files[0];
      console.log(event.target.files)
    } else {
      this.selectedImages = []
    }
    this.createImage();
  }


}
