import { TestBed } from '@angular/core/testing';

import { PlantService } from './plant.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('PlantService', () => {
  let service: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PlantService]
    });
    service = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
