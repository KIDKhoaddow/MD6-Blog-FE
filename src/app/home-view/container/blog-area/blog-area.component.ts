import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../model/blog";
import {BlogsService} from "../../../service/blogs.service";


@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {
  oneBlog?: Blog
  blogs: Blog[] = []
  constructor(private  blogService :BlogsService) {
    this.blogService.getTopBlogMostLike().subscribe(result=>{
      console.log(result)
      if(result!=null){
        this.oneBlog=result
      }
    })
    this.blogService.getTopTenBlogMostLike().subscribe(result=>{
      console.log(result)
      this.blogs=result
    })
  }

  ngOnInit(): void {


  }

}
