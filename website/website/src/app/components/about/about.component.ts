import { Component, OnInit } from '@angular/core';

//import AboutPageImages from 'src/models/aboutPageImages';
import { AboutPageImagesService } from 'src/services/about-page-images.service';

//import { ImageTypeName } from "src/enums/image-type-name.enum";

import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  artworkImages: Object[];
  hobbyImages: Object[];
  familyImages: Object[];
  transform: number;
  selectedIndex: number;

  constructor(private aboutPageImageService: AboutPageImagesService,
              private modalService: ModalService) {
    this.artworkImages = [];            
    this.hobbyImages = [];
    this.familyImages = [];
    this.transform = 100;
    this.selectedIndex = 0;
  }

  // selected(x: number) {
  //   this.downSelected(x);
  //   this.selectedIndex = x;
  // }

  // keySelected(x: number) {
  //   this.downSelected(x);
  //   this.selectedIndex = x;
  // }

  // downSelected(i: number) {
  //   this.transform = 100 - (i) * 50;
  //   this.selectedIndex = this.selectedIndex + 1;
  //   if (this.selectedIndex > this.hobbyImages.length) {
  //     this.selectedIndex = 0;
  //   } else if (this.selectedIndex > this.artworkImages.length) {
  //     this.selectedIndex = 0;
  //   } else if (this.selectedIndex > this.familyImages.length) {
  //     this.selectedIndex = 0;
  //   }
  // }

  ngOnInit() {

    // this.getHobbyImages();
    // this.getArtworkImages();
    // this.getFamilyImages();
  }

  /**
   * getHobbyImages
   */
  // public getHobbyImages(): void {
  //   this.aboutPageImageService.getImageByName(ImageTypeName.hobbies)
  //     .subscribe({
  //       next: (result: AboutPageImages[]) => {
  //         this.hobbyImages = result;
  //       },
  //       error: (err: any) => {
  //         this.modalService.openModal({
  //           image: 'assets/error.png',
  //           title: 'There was an error',
  //           message: `${err}`,
  //           buttonText: 'Close'
  //         });
  //       },
  //       complete: () => {
  //         console.log('Finished getting hobby images');
  //       }
  //   });
  // }

  /**
   * getArtworkImages
   */
  // public getArtworkImages(): void {
  //   this.aboutPageImageService.getImageByName(ImageTypeName.artWork)
  //     .subscribe({
  //       next: (result: AboutPageImages[]) => {
  //         this.artworkImages = result;
  //       },
  //       error: (err: any) => {
  //         this.modalService.openModal({
  //           image: 'assets/error.png',
  //           title: 'There was an error',
  //           message: `${err}`,
  //           buttonText: 'Close'
  //         });
  //       },
  //       complete: () => {
  //         console.log('Finished getting artwork images');
  //       }
  //   });
  // }

  /**
   * getFamilyImages
   */
  // public getFamilyImages(): void {
  //   this.aboutPageImageService.getImageByName(ImageTypeName.family)
  //     .subscribe({
  //       next: (result: AboutPageImages[]) => {
  //         this.familyImages = result;
  //       },
  //       error: (err: any) => {
  //         this.modalService.openModal({
  //           image: 'assets/error.png',
  //           title: 'There was an error',
  //           message: `${err}`,
  //           buttonText: 'Close'
  //         });
  //       },
  //       complete: () => {
  //         console.log('Finished getting family images');
  //       }
  //   });
  // }

  /**
   * Rotates landsacape images to portrait
   * @param img 
   */
  public changeImageToPortrait(img) {
    var w = img.naturalWidth || img.Width;
    var h = img.naturalHeight || img.height;
    return (h > w);
  }
}


