import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutosService } from './services/produtos.service';
import { CarrinhoComprasService } from './services/carrinho-compras.service';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { CadastrarEditarProdutosComponent } from './pages/produtos/cadastrar-editar-produtos/cadastrar-editar-produtos.component';
import { CarrinhoComprasComponent } from './pages/carrinho-compras/carrinho-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    ListagemProdutosComponent,
    CadastrarEditarProdutosComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProdutosService, CarrinhoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
