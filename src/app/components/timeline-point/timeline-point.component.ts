import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline-point',
  templateUrl: './timeline-point.component.html',
  styleUrls: ['./timeline-point.component.scss']
})
export class TimelinePointComponent implements OnInit {

  constructor() { }
  @Input() text: string;

  ngOnInit() {
  }

}
