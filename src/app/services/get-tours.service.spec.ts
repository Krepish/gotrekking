/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetToursService } from './get-tours.service';

describe('GetToursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetToursService]
    });
  });

  it('should ...', inject([GetToursService], (service: GetToursService) => {
    expect(service).toBeTruthy();
  }));
});
