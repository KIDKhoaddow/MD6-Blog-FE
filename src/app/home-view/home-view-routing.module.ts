import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from "./homepage/homepage.component";
import {LayoutComponent} from "./layout/layout.component";


const homeRoutes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
      path: '',
      children:[
        {path:'homepage',component:HomepageComponent},
        {path:'homepage',component:HomepageComponent}
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
