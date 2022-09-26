import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./admin-view-routing.module";
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


@NgModule({
  imports: [
    AppRoutingModule,
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
    MatPaginatorModule
  ],

  declarations: [
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    HeaderComponent,
    UserInfoDialogComponent,
    UserBanActiveDialogComponent,
  ]
})
export class AdminViewModule{}
