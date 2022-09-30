import {NgModule} from "@angular/core";
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule

  ],
  declarations:[
    LayoutComponent,
    HomepageComponent,
    UserProfileComponent
  ]
})


export class  HomeViewModule{}
