import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  buscarTodosProdutos() {
    return this.http.get<IResponse>(`${this.url}/products`);
  }

  buscarProdutoPorId(id: string) {
    return this.http.get<IProduct>(`${this.url}/products/${id}`)
  }

  cadastrarProduto(produto: IProduct) {
    return this.http.post(`${this.url}/products/add`, produto);
  }
}
