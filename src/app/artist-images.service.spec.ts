import { TestBed } from '@angular/core/testing';

import { ArtistImagesService } from './artist-images.service';

describe('ArtistImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistImagesService = TestBed.get(ArtistImagesService);
    expect(service).toBeTruthy();
  });
});
