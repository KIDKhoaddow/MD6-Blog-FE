import {NgModule} from "@angular/core";
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule

    ],
  declarations:[
    LayoutComponent,
    HomepageComponent
  ]
})


export class  HomeViewModule{}
