import { TestBed } from '@angular/core/testing';

import { CitizenInfoServiceService } from './citizen-info-service.service';

describe('CitizenInfoServiceService', () => {
  let service: CitizenInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
