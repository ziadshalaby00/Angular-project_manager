import { TestBed } from '@angular/core/testing';

import { VirtualDataService } from './virtual-data.service';

describe('VirtualDataService', () => {
  let service: VirtualDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
