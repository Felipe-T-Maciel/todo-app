import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardServicesGuard } from './auth-guard-services.guard';

describe('AuthGuardServicesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardServicesGuard]
    });
  });

  it('should ...', inject([AuthGuardServicesGuard], (guard: AuthGuardServicesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
