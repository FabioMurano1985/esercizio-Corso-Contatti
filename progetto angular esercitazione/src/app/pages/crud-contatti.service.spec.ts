import { TestBed } from '@angular/core/testing';

import { CrudContattiService } from './crud-contatti.service';

describe('CrudContattiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudContattiService = TestBed.get(CrudContattiService);
    expect(service).toBeTruthy();
  });
});
