import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'(window:scroll)': 'trackPosition($event)'}
})
export class AppComponent {
  showScrollButton: boolean = false;
  beginY: any;

  ngOnInit() {
    this.beginY = document.documentElement.scrollTop;
  }

  trackPosition($event:any) {
    if (this.beginY == undefined || this.beginY != null) {
        if (this.beginY == $event.currentTarget.scrollY) {
            this.showScrollButton = false;
        }
        else {
            this.showScrollButton = true;
        }
    }   
  }
 }
