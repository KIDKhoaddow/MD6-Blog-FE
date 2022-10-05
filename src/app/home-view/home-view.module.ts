import {NgModule} from "@angular/core";
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import { CategoriesComponent } from './categories/categories.component';
import { SlideShowComponent } from './container/slide-show/slide-show.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { CategoriesAreaComponent } from './container/categories-area/categories-area.component';
import {CommonModule} from "@angular/common";
import { BlogAreaComponent } from './container/blog-area/blog-area.component';
import {MatDividerModule} from "@angular/material/divider";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatIconModule} from "@angular/material/icon";
import {UserProfileComponent } from './user-profile/user-profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  imports: [
    RouterModule,
    CarouselModule,
    CommonModule,
    MatDividerModule,
    FontAwesomeModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ],
  declarations:[
    LayoutComponent,
    HomepageComponent,
    CategoriesComponent,
    SlideShowComponent,
    CategoriesAreaComponent,
    BlogAreaComponent,
    UserProfileComponent,

  ]
})


export class  HomeViewModule{}
