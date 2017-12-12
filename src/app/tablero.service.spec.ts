/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableroService } from './tablero.service';

describe('TableroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableroService]
    });
  });

  it('should ...', inject([TableroService], (service: TableroService) => {
    expect(service).toBeTruthy();
  }));
});
