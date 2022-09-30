import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TourService} from "../../../service/tour.service";
import {Tour} from "../../../model/tour";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-tour-update-dialog',
  templateUrl: './tour-update-dialog.component.html',
  styleUrls: ['./tour-update-dialog.component.css']
})
export class TourUpdateDialogComponent implements OnInit {
  id=new FormControl(this.data.id);
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  price = new FormControl(Number(this.data.price));
  constructor(public dialogRef: MatDialogRef<TourUpdateDialogComponent>, public tourService: TourService,
              @Inject(MAT_DIALOG_DATA) public data: Tour, public dialog: MatDialog, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
  updateTourGroup = this.formBuilder.group({
    id:this.id,
    title: this.title,
    price: this.price,
    description: this.description
  })

  updateTour() {
    const val = this.updateTourGroup.value;
    if (val.title && val.description && val.price) {

      let tour: Tour = {
        id: Number(this.data.id),
        title: val.title,
        description: val.description,
        price: Number(val.price)
      }
      console.log(tour)
      this.tourService.updateTour(tour.id,tour).subscribe(result => {
        console.log(result)
      })
    }
    this.dialogRef.close("ok")
  }
}
