import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nome: string;
  idade: number = 12;

  constructor() {
    this.nome = 'Angular';
    console.log('constructor');
  }
  
}
