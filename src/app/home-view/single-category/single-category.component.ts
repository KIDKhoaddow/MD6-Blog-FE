import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {CategoryDTO} from "../../model/category/categoryDTO";
import {BlogDTO} from "../../model/blog/blogDTO";
import {BlogsService} from "../../service/blogs.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  category:CategoryDTO = { };
  categoryId=0;
  blogOfCategory:BlogDTO[]=[]


  constructor( private route: ActivatedRoute,private  categorySV: CategoryService,
               private blogSv:BlogsService) { }

  ngOnInit(): void {
    let message = this.route.snapshot.paramMap.get("category")
    if (message) {
      this.categoryId = Number(message)
      console.log(message)
      this.categorySV.findCategoryById(Number(message)).subscribe(result=>{
        if(result!=null)
        this.category=result;
      })
      this.blogSv.getPublicBlogByCategory(Number(message)).subscribe(result=>{
        this.blogOfCategory=result;
      })
    }

  }

}
