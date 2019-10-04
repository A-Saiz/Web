import { TestBed, inject } from '@angular/core/testing';

import { AboutPageImagesService } from './about-page-images.service';

describe('AboutPageImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutPageImagesService]
    });
  });

  it('should be created', inject([AboutPageImagesService], (service: AboutPageImagesService) => {
    expect(service).toBeTruthy();
  }));
});
