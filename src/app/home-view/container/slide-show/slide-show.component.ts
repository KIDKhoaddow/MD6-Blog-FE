import { Component, OnInit } from '@angular/core';
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  categories: Category[]
  customOptions: OwlOptions = {
    center: true,
    autoplay: true,
    autoHeight:true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 30,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      800:{
        items:3
      }
    },
    nav: true
  }
  activeSlides: SlidesOutputData | undefined;

  constructor(private categoryService: CategoryService) {
    this.categories = []
    this.categoryService.findAll().subscribe(result => {
      this.categories = result
    })
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  ngOnInit(): void {
  }

}
