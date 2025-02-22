import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  url = environment.url;

  constructor(private http: HttpClient) { }

  buscarTodosProdutos() {
    this.http.get(`${this.url}/products`).subscribe(response => {
      console.log(response);
    })
    return this.products;
  }
}
