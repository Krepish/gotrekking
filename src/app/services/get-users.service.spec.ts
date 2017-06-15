/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetUsersService } from './get-users.service';

describe('GetUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUsersService]
    });
  });

  it('should ...', inject([GetUsersService], (service: GetUsersService) => {
    expect(service).toBeTruthy();
  }));
});
