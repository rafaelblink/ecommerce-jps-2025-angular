import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-editar-produtos',
  templateUrl: './cadastrar-editar-produtos.component.html',
  styleUrls: ['./cadastrar-editar-produtos.component.scss']
})
export class CadastrarEditarProdutosComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
