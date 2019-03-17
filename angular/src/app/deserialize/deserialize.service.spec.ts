import { TestBed } from '@angular/core/testing';

import { DeserializeService } from './deserialize.service';

describe('DeserializeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeserializeService = TestBed.get(DeserializeService);
    expect(service).toBeTruthy();
  });
});
