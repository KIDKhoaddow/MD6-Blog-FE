import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from "./homepage/homepage.component";
import {LayoutComponent} from "./layout/layout.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";


const homeRoutes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
      path: '',
      children:[
        {path:'homepage',component:HomepageComponent},
        {path:'userprofile',component:UserProfileComponent}
      ]
      }

    ]


  }
]


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeViewRoutingModule {
}
