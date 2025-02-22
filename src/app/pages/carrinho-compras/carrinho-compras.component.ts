import { Component, inject } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/services/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss']
})
export class CarrinhoComprasComponent {

  carrinhoComprasService = inject(CarrinhoComprasService);

}
