import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from "./homepage/homepage.component";
import {LayoutComponent} from "./layout/layout.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CategoriesComponent} from "./categories/categories.component";
import {BlogsComponent} from "../admin-view/blogs/blogs.component";
import {FormCreateComponent} from "./form-create/form-create.component";



const homeRoutes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
      path: '',
      children:[
        {path:'homepage',component:HomepageComponent},
        {path:'userprofile',component:UserProfileComponent},
        {path:'userprofile1/:selected',component:UserProfileComponent},
        {path:'userprofile2/:selected',component:UserProfileComponent},
        {path:'userprofile3/:selected',component:UserProfileComponent},
        {path:'userprofile4/:selected',component:UserProfileComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'blog',component:BlogsComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'createBlog',component:FormCreateComponent},
      ]
      }
    ]
  },
  {
    path:"",
    component:LayoutComponent,
    children:[
      {path: "",component:HomepageComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeViewRoutingModule {
}
