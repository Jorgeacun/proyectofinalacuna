import { TestBed } from '@angular/core/testing';

import { JuzgadoService } from './juzgado.service';

describe('JuzgadoService', () => {
  let service: JuzgadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuzgadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
