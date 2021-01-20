import { TestBed } from '@angular/core/testing';

import { AlumnosArrayService } from './alumnos-array.service';

describe('AlumnosArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnosArrayService = TestBed.get(AlumnosArrayService);
    expect(service).toBeTruthy();
  });
});
