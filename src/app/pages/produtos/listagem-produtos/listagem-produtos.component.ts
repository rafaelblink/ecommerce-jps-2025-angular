import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { IResponse } from 'src/app/interfaces/response';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent {

  products: IProduct[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.buscarTodosProdutos().subscribe({
      next: (response: IResponse) => {
        this.products = response.products
      },
      error: (error) => {
        console.error(error.message);
      }
    });
  }

}
