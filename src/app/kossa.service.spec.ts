import { TestBed } from '@angular/core/testing';

import { KossaService } from './kossa.service';

describe('KossaService', () => {
  let service: KossaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KossaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
