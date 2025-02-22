import { Component, inject, Input } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/services/carrinho-compras.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  
  @Input()
  product: any = {};

  carrinhoComprasService = inject(CarrinhoComprasService);

  ngOnInit() {
    // console.log(this.product.images[0]);
  }

  adicionarItemCarrinho() {
    this.carrinhoComprasService.adicionarItem(this.product);
  }
}
