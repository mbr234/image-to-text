import { TestBed } from '@angular/core/testing';

import { ImageToTextService } from './image-to-text.service';

describe('IttService', () => {
  let service: ImageToTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageToTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
