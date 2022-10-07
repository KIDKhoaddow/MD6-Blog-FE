import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() value: any = 0
  @Input() liked: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
