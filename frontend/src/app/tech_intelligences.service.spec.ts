import { TestBed } from '@angular/core/testing';

import { TechIntelligencesService } from './tech-intelligences.service';

describe('TechIntelligencesService', () => {
  let service: TechIntelligencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechIntelligencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
