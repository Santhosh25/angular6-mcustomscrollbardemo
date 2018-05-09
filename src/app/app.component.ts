import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    this.initializeScroll();
  }

  initializeScroll() {
    $('.target').mCustomScrollbar({
      theme: 'minimal-dark',
      alwaysShowScrollbar: 0
    });
  }
}
