import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Blog} from "../../../model/blog/blog";

@Component({
  selector: 'app-blog-info-dialog',
  templateUrl: './blog-info-dialog.component.html',
  styleUrls: ['./blog-info-dialog.component.css']
})
export class BlogInfoDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<BlogInfoDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Blog, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
