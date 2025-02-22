import { TestBed } from '@angular/core/testing';

import { CarrinhoComprasService } from './carrinho-compras.service';

describe('CarrinhoComprasService', () => {
  let service: CarrinhoComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
