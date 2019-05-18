import { TestBed } from '@angular/core/testing';

import { ScalibService } from './scalib.service';

describe('ScalibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScalibService = TestBed.get(ScalibService);
    expect(service).toBeTruthy();
  });
});
