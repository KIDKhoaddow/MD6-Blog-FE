import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from "./homepage/homepage.component";
import {LayoutComponent} from "./layout/layout.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CategoriesComponent} from "./categories/categories.component";
import {BlogsComponent} from "../admin-view/blogs/blogs.component";
import {FormCreateComponent} from "./form-create/form-create.component";
import {AuthorityModule} from "../authority/authority.module";
import {AuthorityGuard} from "../authority/login/authority.guard";
import {AuthorityHomeGuard} from "./authority-home.guard";



const homeRoutes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
      path: '',
      children:[
        {path:'homepage',component:HomepageComponent},
        {path:'userprofile',component:UserProfileComponent,canActivate:[AuthorityHomeGuard]},
        {path:'userprofile1/:selected',component:UserProfileComponent,canActivate:[AuthorityHomeGuard]},
        {path:'userprofile2/:selected',component:UserProfileComponent,canActivate:[AuthorityHomeGuard]},
        {path:'userprofile3/:selected',component:UserProfileComponent,canActivate:[AuthorityHomeGuard]},
        {path:'userprofile4/:selected',component:UserProfileComponent,canActivate:[AuthorityHomeGuard]},
        {path:'createBlog',component:FormCreateComponent,canActivate:[AuthorityHomeGuard]},
        {path:'categories',component:CategoriesComponent},
        {path:'blog',component:BlogsComponent},
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
