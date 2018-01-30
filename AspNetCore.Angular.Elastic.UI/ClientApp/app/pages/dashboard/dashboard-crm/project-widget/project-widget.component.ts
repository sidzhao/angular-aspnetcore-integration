import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vr-project-widget',
  templateUrl: './project-widget.component.html'
})
export class ProjectWidgetComponent implements OnInit {

  @Input() smallView: boolean;

  constructor() { }

  ngOnInit() {
  }

}
