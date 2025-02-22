import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-editar-produtos',
  templateUrl: './cadastrar-editar-produtos.component.html',
  styleUrls: ['./cadastrar-editar-produtos.component.scss'],
})
export class CadastrarEditarProdutosComponent {
  id: string = '';
  formGroupProduto: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl(0, Validators.min(1)),
    stock: new FormControl(0),
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly produtosService: ProdutosService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.produtosService.buscarProdutoPorId(this.id).subscribe(response => {
        console.log(response);
      })
    }
  }

  novoMetodo() {
    const endereco = 'meu endereço';

    this.formGroupProduto.get('title')?.setValue(endereco);

    console.log('teste');
  }

  cadastrarProduto() {
    const produto: IProduct = this.formGroupProduto.value;

    this.produtosService.cadastrarProduto(produto).subscribe(response => {
      console.log(response);
      Swal.fire('Sucesso', 'Produto cadastrado!!! UHULL!!', 'success');
      this.router.navigate(['/produtos']);
    });

    console.log(this.formGroupProduto.value);
  }
}
