import { TestBed } from '@angular/core/testing';

import { FormationServicesService } from './formation-services.service';

describe('FormationServicesService', () => {
  let service: FormationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
