import { Component, OnInit } from '@angular/core';
import AboutPageImages from 'src/models/aboutPageImages';
import { AboutPageImagesService } from 'src/services/about-page-images.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutPageImages: Array<AboutPageImages>;

  constructor(private aboutPageImageService: AboutPageImagesService) { }

  ngOnInit() {
  }

}
