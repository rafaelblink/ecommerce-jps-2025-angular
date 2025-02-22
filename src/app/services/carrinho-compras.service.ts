import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {

  itensCarrinho: any[] = [];

  constructor() { }

  adicionarItem(item: any) {
    this.itensCarrinho.push(item);
    
    console.log('Item adicionado', item);
  }
}
