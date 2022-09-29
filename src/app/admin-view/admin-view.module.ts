import {NgModule} from "@angular/core";
import {AdminViewRoutingModule} from "./admin-view-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NavbarComponent} from "./container/navbar/navbar.component";
import {UsersComponent} from "./users/users.component";
import {HeaderComponent} from "./container/header/header.component";
import {UserInfoDialogComponent} from "./users/user-info-dialog/user-info-dialog.component";
import {UserBanActiveDialogComponent} from "./users/user-ban-active-dialog/user-ban-active-dialog.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BlogsComponent } from './blogs/blogs.component';
import { BlogBanActiveDialogComponent } from './blogs/blog-ban-active-dialog/blog-ban-active-dialog.component';
import { BlogInfoDialogComponent } from './blogs/blog-info-dialog/blog-info-dialog.component';
import {MatSortModule} from "@angular/material/sort";
import { CategoryComponent } from './category/category.component';
import { TourComponent } from './tour/tour.component';
import { TourInfoDialogComponent } from './tour/tour-info-dialog/tour-info-dialog.component';
import { TourCreateDialogComponent } from './tour/tour-create-dialog/tour-create-dialog.component';
import { TourUpdateDialogComponent } from './tour/tour-update-dialog/tour-update-dialog.component';





@NgModule({
  imports: [
    AdminViewRoutingModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule
  ],

  declarations: [
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    HeaderComponent,
    UserInfoDialogComponent,
    UserBanActiveDialogComponent,
    BlogsComponent,
    BlogBanActiveDialogComponent,
    BlogInfoDialogComponent,
    CategoryComponent,
    TourComponent,
    TourInfoDialogComponent,
    TourCreateDialogComponent,
    TourUpdateDialogComponent,
  ]
})
export class AdminViewModule{}