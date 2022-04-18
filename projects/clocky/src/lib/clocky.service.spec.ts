import { TestBed } from '@angular/core/testing';

import { ClockyService } from './clocky.service';

describe('ClockyService', () => {
  let service: ClockyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
