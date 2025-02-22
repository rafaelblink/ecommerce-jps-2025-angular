import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';

const routes: Routes = [
  {
    path: 'produtos', component: ListagemProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
