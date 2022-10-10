import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() value: any = 0
  @Input() liked: boolean = false
  @Input() icon : any=""

  constructor() {
  }

  ngOnInit(): void {
  }

}
