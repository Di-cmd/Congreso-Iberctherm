import { TestBed } from '@angular/core/testing';

import { TraductorService } from './traductor.service';

describe('TraductorService', () => {
  let service: TraductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
