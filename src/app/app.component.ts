import { Component } from '@angular/core';

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

  products = [
    {
      name: 'Camiseta Preta',
      description: 'Camiseta preta básica',
      price: 40.01,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHxllaAkkZ2KUpuBkq11BZNdkgz3suMrZQ&s',
      discount: 10,
      stock: 10
    },
    {
      name: 'Camiseta Branca',
      description: 'Camiseta branca básica',
      price: 50.01,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHxllaAkkZ2KUpuBkq11BZNdkgz3suMrZQ&s',
      discount: 20,
      stock: 50
    }
  ];

  novaFuncao() {
    console.log('Nova função');
    this.title = 'Novo título';
  }
}
