import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {BlogDTO} from "../../model/blog/blogDTO";
import {BlogsService} from "../../service/blogs.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  pipe = new DatePipe('en-US');
  blogPublic: BlogDTO[] = []
  selected: string = "";

  constructor(private blogSv: BlogsService) {
  }

  ngOnInit(): void {
    this.blogSv.getPublicBlog().subscribe(result => {
      this.blogPublic = result.reverse()
    })
  }

  applySelect() {

    if (this.selected === "recently") {
      this.blogSv.getPublicBlog().subscribe(value => {
        this.blogPublic = value;
      })
    } else if (this.selected === "recently") {
      this.blogSv.getPublicBlog().subscribe(value => {
        value = value.filter(function (blogDTO) {
          return blogDTO
        })
        this.blogPublic = value;
      })
    } else if (this.selected === "all") {
      this.blogSv.getPublicBlog().subscribe(value => {
        this.blogPublic = value;
      })
    }
  }

}
