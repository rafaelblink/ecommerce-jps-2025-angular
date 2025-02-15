import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-jps-2025-angular';
  idButton = 1;

  novaFuncao() {
    console.log('Nova função');
    this.title = 'Novo título';
  }
}
