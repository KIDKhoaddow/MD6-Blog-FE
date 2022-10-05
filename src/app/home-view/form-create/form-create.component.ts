import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from 'src/app/service/blogs.service';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  editorStyle = {
    height: '600px'
  };

  title = new FormControl('')
  description = new FormControl('')
  content = new FormControl('', [Validators.required, Validators.maxLength(100000000000000000)])
  createAt = new FormControl('')
  blogStatus = new FormControl('')
  userInfo = new FormControl('')


  formCreateBlog = this.formGroup.group({
    title: this.title,
    description: this.description,
    content: this.content,
    createAt: this.createAt,
    blogStatus: this.blogStatus,
    userInfo: this.userInfo,
  })


  constructor(private blogsService: BlogsService,
              private formGroup: FormBuilder) {
  }




  ngOnInit(): void {
  }

  createBlog() {
    let blogs = {
      title: this.formCreateBlog.value.title,
      description: this.formCreateBlog.value.description,
      content: this.formCreateBlog.value.content,
      createAt: this.formCreateBlog.value.createAt,
      blogStatus: this.formCreateBlog.value
    }
  }

}
