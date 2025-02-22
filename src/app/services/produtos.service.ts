import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  products = [
    {
      id: 1,
      name: 'Camiseta Preta',
      description: 'Camiseta preta básica',
      price: 40.01,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHxllaAkkZ2KUpuBkq11BZNdkgz3suMrZQ&s',
      discount: 10,
      stock: 10
    },
    {
      id: 2,
      name: 'Camiseta Branca',
      description: 'Camiseta branca básica',
      price: 50.01,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHxllaAkkZ2KUpuBkq11BZNdkgz3suMrZQ&s',
      discount: 20,
      stock: 50
    }
  ];

  constructor() { }

  buscarTodosProdutos() {
    return this.products;
  }
}
