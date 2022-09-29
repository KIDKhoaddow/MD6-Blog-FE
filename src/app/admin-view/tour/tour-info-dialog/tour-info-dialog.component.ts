import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Blog} from "../../../model/blog";
import {Tour} from "../../../model/tour";

@Component({
  selector: 'app-tour-info-dialog',
  templateUrl: './tour-info-dialog.component.html',
  styleUrls: ['./tour-info-dialog.component.css']
})
export class TourInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TourInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tour, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
