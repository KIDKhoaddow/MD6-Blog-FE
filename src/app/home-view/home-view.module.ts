import {NgModule} from "@angular/core";
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import {BlogProfileComponent} from "./blog-profile/blog-profile.component";
import {FormCreateComponent} from "./form-create/form-create.component";

@NgModule({
    imports: [
        RouterModule

    ],
  declarations:[
    LayoutComponent,
    HomepageComponent,
    BlogProfileComponent,
    FormCreateComponent
  ]
})


export class  HomeViewModule{}
