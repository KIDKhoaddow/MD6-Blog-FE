import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../model/blog/blog";
import {BlogsService} from "../../../service/blogs.service";
import {DatePipe, KeyValue} from "@angular/common";
import {BlogDTO} from "../../../model/blog/blogDTO";
import {object} from "@angular/fire/database";
import {BlogRecentlyPerCategory} from "../../../model/blog/blog-recently-per-category";


@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {
  oneBlog: BlogDTO = {}
  blogs: Blog[] = []
  blogsRecently: BlogDTO[] = []
  blogsPerCategory:BlogRecentlyPerCategory[]=[]
  pipe = new DatePipe('en-US');

  constructor(private blogService: BlogsService) {
    this.blogService.getTopBlogMostLike().subscribe(result => {
      if (result != null) {
        this.oneBlog = result
      }
    })
    this.blogService.getTopTenBlogMostLike().subscribe(result => {
      console.log(result)
      this.blogs = result
    })
    this.blogService.getAllBlogRecently().subscribe(result => {
      console.log(result)
      this.blogsRecently = result
    })
    this.blogService.getThreeNewBlogsPerCategory().subscribe(result => {
      console.log(result)
      this.blogsPerCategory=result
    })


  }

  ngOnInit(): void {


  }

}
