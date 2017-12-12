/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioDetalleService } from './usuario-detalle.service';

describe('UsuarioDetalleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioDetalleService]
    });
  });

  it('should ...', inject([UsuarioDetalleService], (service: UsuarioDetalleService) => {
    expect(service).toBeTruthy();
  }));
});
