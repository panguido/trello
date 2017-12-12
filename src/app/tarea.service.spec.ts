/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TareaService } from './tarea.service';

describe('TareaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareaService]
    });
  });

  it('should ...', inject([TareaService], (service: TareaService) => {
    expect(service).toBeTruthy();
  }));
});
