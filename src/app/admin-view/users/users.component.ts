import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {UserInfo} from "../../model/userInfo";
import {UsersService} from "../container/service/users.service";
import {SelectionModel} from "@angular/cdk/collections";

import {MatDialog} from "@angular/material/dialog";
import {UserInfoDialogComponent} from "./user-info-dialog/user-info-dialog.component";
import {UserBanActiveDialogComponent} from "./user-ban-active-dialog/user-ban-active-dialog.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UserInfo>;
  dataSource: MatTableDataSource<UserInfo>;
  selection = new SelectionModel<UserInfo>(true, []);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'avatar', 'name', 'email', 'phoneNumber', 'role', 'action'];

  constructor(private userService: UsersService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<UserInfo>;
    this.userService.findAll().subscribe(value => {
      this.dataSource.data = value;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(value => {
      this.dataSource.data = value
    })

    this.dataSource.connect()

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  displayStudent() {
    this.userService.findAll().subscribe(value => {
      this.dataSource.data = value

    })
    console.log(this.dataSource.data)
  }

  checkRole(role: string): boolean {
    return role === "ROLE_ADMIN";
  }
  checkStatus(status:boolean): boolean {
    document.getElementById("")
    return status ;
  }
  openUserInfo(userInfo:UserInfo) {
    const dialogRef = this.dialog.open(UserInfoDialogComponent,{data:userInfo});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUserBanActve(userInfo:UserInfo) {
    const dialogRef = this.dialog.open(UserBanActiveDialogComponent,{data:userInfo});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.displayStudent()
    });
  }

}


