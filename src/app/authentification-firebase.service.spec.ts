import { TestBed } from '@angular/core/testing';

import { AuthentificationFirebaseService } from './authentification-firebase.service';

describe('AuthentificationFirebaseService', () => {
  let service: AuthentificationFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
