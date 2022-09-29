import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Blog} from "../../model/blog";
import {Tour} from "../../model/tour";
import {MatDialog} from "@angular/material/dialog";
import {TourService} from "../container/service/tour.service";
import {BlogInfoDialogComponent} from "../blogs/blog-info-dialog/blog-info-dialog.component";
import {TourInfoDialogComponent} from "./tour-info-dialog/tour-info-dialog.component";
import {TourCreateDialogComponent} from "./tour-create-dialog/tour-create-dialog.component";
import {TourUpdateDialogComponent} from "./tour-update-dialog/tour-update-dialog.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Tour>;
  dataSource: MatTableDataSource<Tour>;
  displayedColumns = ['id', 'title', 'price', 'action'];

  constructor(public tourService: TourService, public dialog: MatDialog, private cd: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<Tour>;
    this.tourService.findAll().subscribe(value => {
      this.dataSource.data = value;
    })
  }

  ngOnInit(): void {
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

  displayTour() {
    this.tourService.findAll().subscribe(value => {
      this.dataSource.data = value
    })
    console.log(this.dataSource.data)
  }

  openTourInfo(tour: Tour) {
    const dialogRef = this.dialog.open(TourInfoDialogComponent, {data: tour});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openTourCreate() {
    const dialogRef = this.dialog.open(TourCreateDialogComponent, {data: null});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.displayTour()
    })

  }

  openUpdateTour(tour: Tour) {
    const dialogRef = this.dialog.open(TourUpdateDialogComponent, {data: tour});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.displayTour()
    })

  }

  deleteTour(id: number) {
    Swal.fire({
      title: 'Do you want to delete the tour?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.tourService.deleteTour(id).subscribe(result => {
          console.log(result)
          Swal.fire('delete!', '', 'success').finally(()=>{
            this.displayTour()
          })
        })
      }
    })
  }

}
