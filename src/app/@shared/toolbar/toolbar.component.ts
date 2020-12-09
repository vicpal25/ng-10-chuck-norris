import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() contextCategory: string; // decorate the property with @Input()

  showHomeLink = false;

  constructor() {}

  ngOnInit(): void {
    this.showHomeLink = this.contextCategory.indexOf('home') < 0 && true;
  }
}
