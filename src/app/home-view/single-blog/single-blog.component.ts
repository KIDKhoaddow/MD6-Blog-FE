import { Component, OnInit } from '@angular/core';
import {Blog} from "../../model/blog/blog";
import {BlogsService} from "../../service/blogs.service";
import {DatePipe} from "@angular/common";
import {BlogDTO} from "../../model/blog/blogDTO";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  blogs: Blog[] = []
  blog:BlogDTO ={}
  pipe = new DatePipe('en-US');
  blogId=0
  constructor(private blogService: BlogsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getTopTenBlogMostLike().subscribe(result => {
      this.blogs = result
    })
    let message = this.route.snapshot.paramMap.get("blog")
    if (message) {
      this.blogId = Number(message)
    }
    this.blogService.getBlog(Number(message)).subscribe(result=>{
      this.blog=result
      const script1 = document.createElement('script');
      script1.innerHTML='document.getElementById("content").innerHTML='+'"'+result.content+'"'
      document.body.appendChild(script1);
    })

  }
  ngAfterViewInit(){

  }

}
