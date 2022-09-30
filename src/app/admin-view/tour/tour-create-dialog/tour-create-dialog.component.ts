import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Tour} from "../../../model/tour";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TourService} from "../../../service/tour.service";

@Component({
  selector: 'app-tour-create-dialog',
  templateUrl: './tour-create-dialog.component.html',
  styleUrls: ['./tour-create-dialog.component.css']
})
export class TourCreateDialogComponent implements OnInit {
  title = new FormControl("");
  description = new FormControl("");
  price = new FormControl("",);


  constructor(public dialogRef: MatDialogRef<TourCreateDialogComponent>, public tourService: TourService,
              @Inject(MAT_DIALOG_DATA) public data: Tour, public dialog: MatDialog, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  creteTourGroup = this.formBuilder.group({
    title: this.title,
    price: this.price,
    description: this.description
  })

  createNew() {
    const val = this.creteTourGroup.value;
    if (val.title && val.description && val.price) {

      let tour: Tour = {
        id: 0,
        title: val.title,
        description: val.description,
        price: Number(val.price)
      }
      console.log(tour)
      this.tourService.createTour(tour).subscribe(result => {
        console.log(result)
      })
    }
    this.dialogRef.close("ok")
  }


}
