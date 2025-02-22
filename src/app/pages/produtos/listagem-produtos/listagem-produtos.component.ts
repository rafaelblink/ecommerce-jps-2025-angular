import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent {

  products: any[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.products = this.produtosService.buscarTodosProdutos();
  }

}
