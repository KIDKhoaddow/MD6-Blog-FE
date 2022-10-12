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
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {TagDTO} from "../../model/tag/tagDTO";
import {AuthService} from "../../authority/service/auth.service";


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  minDescription = 50;
  maxDescription = 500;

  minTittle = 20;
  maxTittle = 200;

  blogDTOs?: Blog [];
  editorStyle = {
    height: '600px'
  }
  selectedImages: any[] = [];
  213: 'uploadFireBase';

  downloadURL: Observable<string> | undefined;
  fb: any;
  listURL: any[] = [];


  categories: Category[] = [];
  tags: TagDTO[] = []
  title = new FormControl('', [Validators.required, Validators.minLength(this.minTittle), Validators.maxLength(this.maxTittle)]);
  content = new FormControl('', [Validators.required, Validators.maxLength(100000000000000000)]);
  description = new FormControl('', [Validators.required, Validators.minLength(this.minDescription), Validators.maxLength(this.maxDescription)]);
  categoryId = new FormControl('', Validators.required);
  tag = new FormControl(' ');
  pictureLink?: string | null = "";

  titleMatcher = new MyErrorStateMatcher();
  contentMatcher = new MyErrorStateMatcher();
  descriptionMatcher = new MyErrorStateMatcher();
  formCreateBlog = this.formGroup.group({
    id: 0,
    categoryId: this.categoryId,
    title: this.title,
    describes: this.description,
    content: this.content,
    picture: this.pictureLink,
    tags: this.tag
  })
  blogId = -1
  isUpdate = false;

  constructor(private blogsService: BlogsService,private authService:AuthService,
              private formGroup: FormBuilder,
              private storage: AngularFireStorage,
              private categoryService: CategoryService,
              private router: Router, private route: ActivatedRoute) {

  };


  ngOnInit(): void {
    this.categories = [];
    this.categoryService.findAll().subscribe(result => {
      this.categories = result;
    });
    let message = this.route.snapshot.paramMap.get("blog")
    if (message) {
      this.blogId = Number(message)
    }
    if (this.blogId !== -1) {
      this.blogsService.getBlog(this.blogId).subscribe(result => {
        // @ts-ignore
        this.formCreateBlog.patchValue(result)
        this.pictureLink = result.picture;
        this.categoryId.setValue(String(result.categoryId))
        this.isUpdate = true
      })
    }
  }

  updateBlog() {
    let blog: BlogDTO = {
      id: this.formCreateBlog.value.id,
      categoryId: Number(this.categoryId),
      title: this.formCreateBlog.value.title,
      describes: this.formCreateBlog.value.describes,
      content: this.formCreateBlog.value.content,
      picture: this.pictureLink,
      tag: [{
        id: 1,
        name: this.formCreateBlog.value.tags
      }]
    }
    this.blogsService.updateBlog(blog).subscribe(result => {
      Swal.fire({
        icon: 'success',
        title: 'Update Blog Success',
        timer: 2500
      }).finally(() => {
        this.router.navigateByUrl("/home/userprofile")
      })
    })
  }

  createBlog() {

    // @ts-ignore
    let blog: BlogDTO = {
      categoryId: Number(this.formCreateBlog.value.categoryId),
      title: this.formCreateBlog.value.title,
      describes: this.formCreateBlog.value.describes,
      content: this.formCreateBlog.value.content,
      picture: this.pictureLink,
      tag: [{
        id: 1,
        name: this.formCreateBlog.value.tags
      }]
    }
    console.log(blog)
    this.blogsService.createBlog(blog).subscribe(value => {
      console.log(value);
      if (value != null) {
        Swal.fire({
          icon: 'success',
          title: 'Create Blog Success',
          timer: 2500
        }).finally(() => {
          this.router.navigateByUrl("/home/userprofile")
        })
      } else {
        console.log("out")
      }

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
              this.pictureLink = url
              this.listURL.push(url)
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
