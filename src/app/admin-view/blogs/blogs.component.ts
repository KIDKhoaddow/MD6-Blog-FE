import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatDialog} from "@angular/material/dialog";
import {Blog} from "../../model/blog";
import {BlogsService} from "../container/service/blogs.service";
import {UserInfoDialogComponent} from "../users/user-info-dialog/user-info-dialog.component";
import {BlogInfoDialogComponent} from "./blog-info-dialog/blog-info-dialog.component";
import {BlogBanActiveDialogComponent} from "./blog-ban-active-dialog/blog-ban-active-dialog.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Blog>;
  dataSource: MatTableDataSource<Blog>;
  selection = new SelectionModel<Blog>(true, []);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'author', 'title', 'category', 'createAt', 'action'];
  selected: string = "";
  disableButton = false


  constructor(private blogService: BlogsService, public dialog: MatDialog, private cd: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<Blog>;
    this.blogService.findAll().subscribe(value => {
      this.dataSource.data = value;
    })
  }

  ngOnInit(): void {
    this.blogService.findAll().subscribe(value => {
      this.dataSource.data = value
    })

    this.dataSource.connect()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cd.detectChanges()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applySelect() {
    if (this.selected === "banBlog") {
      this.blogService.findAll().subscribe(value => {
        value = value.filter(function (blog) {
          return !blog.blogStatus.verify
        })
        this.dataSource.data = value;
      })
    } else if (this.selected === "activeBlog") {
      this.blogService.findAll().subscribe(value => {
        value = value.filter(function (blog) {
          return blog.blogStatus.verify
        })
        this.dataSource.data = value;
      })
    } else if (this.selected === "all") {
      this.blogService.findAll().subscribe(value => {
        this.dataSource.data = value;
      })
    }
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
  checkboxLabel(row?: Blog): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }

  displayBlog() {
    this.blogService.findAll().subscribe(value => {
      this.dataSource.data = value
    })
    console.log(this.dataSource.data)
  }

  banGroupBlog() {
    let blogs = this.selection.selected
    for (const element of blogs) {
      this.blogService.banBlog(element.id).subscribe(result => {
        console.log(result)
      })}
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: "Action complete",
      timer: 1500
    })
    this.selection.clear()
    this.displayBlog()
  }

  activeGroupBlog() {
    let blogs = this.selection.selected
    for (const element of blogs) {
      this.blogService.activeBlog(element.id).subscribe(result => {
        console.log(result)
      })}
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: "Action complete",
      timer: 1500
    })
    this.selection.clear()
    this.displayBlog()
  }

  openBlogInfo(blog: Blog) {
    const dialogRef = this.dialog.open(BlogInfoDialogComponent, {data: blog});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBlogBanActive(blog: Blog) {
    const dialogRef = this.dialog.open(BlogBanActiveDialogComponent, {data: blog});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == 'ok') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Action complete",
          timer: 1500
        })}
      this.selection.clear()
      this.displayBlog()
    })}


  checkStatus(verify: boolean): boolean {
    return verify;
  }
}
