import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nome: string;

  constructor() {
    this.nome = 'Angular';
    console.log('constructor');
  }
  
}
