import { TestBed, inject } from '@angular/core/testing';

import { AnticipatedAlbumsService } from './anticipated-albums.service';

describe('AnticipatedAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnticipatedAlbumsService]
    });
  });

  it('should be created', inject([AnticipatedAlbumsService], (service: AnticipatedAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
