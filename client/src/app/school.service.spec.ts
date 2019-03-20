import { TestBed } from '@angular/core/testing';

import { SchoolService } from './school.service';

describe('SchoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolService = TestBed.get(SchoolService);
    expect(service).toBeTruthy();
  });
});
