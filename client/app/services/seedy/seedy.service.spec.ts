import { TestBed, inject } from '@angular/core/testing';

import { SeedyService } from './seedy.service';

describe('SeedyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeedyService]
    });
  });

  it('should be created', inject([SeedyService], (service: SeedyService) => {
    expect(service).toBeTruthy();
  }));
});
