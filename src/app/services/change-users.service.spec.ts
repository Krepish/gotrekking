/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeUsersService } from './change-users.service';

describe('ChangeUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeUsersService]
    });
  });

  it('should ...', inject([ChangeUsersService], (service: ChangeUsersService) => {
    expect(service).toBeTruthy();
  }));
});
