import { Component } from '@angular/core';
import { ProdutosService } from './services/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-jps-2025-angular';
  idButton = 1;
  itens = [
    {
      name: 'Item 1',
      category: 'Category 1'
    },
    {
      name: 'Item 2',
      category: 'Category 2'
    },
    {
     
    }
  ];

  constructor(private produtosService: ProdutosService) {}

  

  novaFuncao() {
    console.log('Nova função');
    this.title = 'Novo título';
  }

 
}
