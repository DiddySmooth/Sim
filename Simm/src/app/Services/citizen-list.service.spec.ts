import { TestBed } from '@angular/core/testing';

import { CitizenListService } from './citizen-list.service';

describe('CitizenListService', () => {
  let service: CitizenListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
