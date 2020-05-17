import { TestBed } from '@angular/core/testing';

import { DinolistService } from './dinolist.service';

describe('DinolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinolistService = TestBed.get(DinolistService);
    expect(service).toBeTruthy();
  });
});
