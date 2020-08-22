import { TestBed } from '@angular/core/testing';

import { StocsService } from './stocs.service';

describe('StocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocsService = TestBed.get(StocsService);
    expect(service).toBeTruthy();
  });
});
