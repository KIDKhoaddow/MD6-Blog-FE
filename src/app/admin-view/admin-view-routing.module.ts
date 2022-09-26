import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from "./users/users.component";
import {NavbarComponent} from "./container/navbar/navbar.component";



const adminRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent ,
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: '', component: DashboardComponent },
          { path: 'users', component: UsersComponent }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
