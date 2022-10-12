import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {BlogDTO} from "../../model/blog/blogDTO";
import {BlogsService} from "../../service/blogs.service";
import {CategoryDTO} from "../../model/category/categoryDTO";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  pipe = new DatePipe('en-US');
  blogPublic: BlogDTO[] = []
  blogInterface: BlogDTO[] = []
  selected: string = "";
  numberBlog = 8;
  categories: CategoryDTO[] = []

  constructor(private blogSv: BlogsService, private categorySV: CategoryService) {
  }

  ngOnInit(): void {
    this.categorySV.findAll().subscribe(result => {
      this.categories = result
    })
    this.blogSv.getPublicBlog().subscribe(result => {
      this.blogInterface=result.reverse()
      this.displayBlog()
    })

  }

  displayBlog() {
    if(this.blogInterface.length>=this.numberBlog){
      for (let i = 0; i < this.numberBlog; i++) {
        this.blogPublic.push(this.blogInterface[i]);
      }
    }else {
      for (let i = 0; i < this.blogInterface.length; i++) {
        this.blogPublic.push(this.blogInterface[i]);
      }
    }
  }

  loadMoreBlog() {
    this.numberBlog += 8;
    this.blogPublic = [];
    this.displayBlog();
  }

  applySelect() {
    if (!isNaN(Number(this.selected))) {
      this.blogSv.getPublicBlogByCategory(Number(this.selected)).subscribe(value => {
        this.numberBlog=8;
        this.blogInterface = value;
        this.blogPublic=[]
        this.displayBlog()
      })
    } else if (this.selected === "All") {
      this.blogSv.getPublicBlog().subscribe(result => {
        this.numberBlog=8;
        this.blogInterface=result.reverse()
        this.blogPublic=[]
        this.displayBlog();
      })

    }
  }

}
