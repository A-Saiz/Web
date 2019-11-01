import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import AboutPageImages from 'src/models/aboutPageImages';
import { AboutPageImagesService } from 'src/services/about-page-images.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  state: string;

  aboutPageImages: Array<AboutPageImages>;

  constructor(private aboutPageImageService: AboutPageImagesService, public element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }else {
      this.state = 'hide';
    }
  }

  ngOnInit() {
  }

}
