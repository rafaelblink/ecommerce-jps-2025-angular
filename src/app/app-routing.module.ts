import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { CarrinhoComprasComponent } from './pages/carrinho-compras/carrinho-compras.component';
import { CadastrarEditarProdutosComponent } from './pages/produtos/cadastrar-editar-produtos/cadastrar-editar-produtos.component';

const routes: Routes = [
  {
    path: 'produtos', component: ListagemProdutosComponent
  },
  {
    path: 'carrinho', component: CarrinhoComprasComponent
  },
  {
    path: 'cadastrar-produto', component: CadastrarEditarProdutosComponent
  },
  {
    path: 'editar-produto/:id', component: CadastrarEditarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
