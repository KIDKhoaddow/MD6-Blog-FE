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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormCreateComponent} from "./form-create/form-create.component";
import {QuillModule} from "ngx-quill";
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
    QuillModule.forRoot(),
    MatFormFieldModule,
    FormsModule

  ],
  declarations:[
    LayoutComponent,
    HomepageComponent,
    CategoriesComponent,
    SlideShowComponent,
    CategoriesAreaComponent,
    BlogAreaComponent,
    UserProfileComponent,
    FormCreateComponent,

  ]
})


export class  HomeViewModule{}
