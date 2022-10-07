import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BlogInfoDialogComponent} from "../blog-info-dialog/blog-info-dialog.component";
import {Blog} from "../../../model/blog/blog";
import {BlogsService} from "../../../service/blogs.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-blog-ban-active-dialog',
  templateUrl: './blog-ban-active-dialog.component.html',
  styleUrls: ['./blog-ban-active-dialog.component.css']
})
export class BlogBanActiveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BlogInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Blog, public dialog: MatDialog,
    private blogService:BlogsService) { }

  ngOnInit(): void {

  }
  banBlog(blog:Blog) {
    this.blogService.banBlog(blog.id).subscribe(compileResults=>{
      console.log(compileResults)
    })
    this.dialogRef.close("ok")

  }
  activeBlog(blog:Blog){
    this.blogService.activeBlog(blog.id).subscribe(compileResults=>{
      console.log(compileResults)
    })
    this.dialogRef.close("ok")

  }
}
