import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MEComponent } from './me/me.component';

import { TabelaComponent } from './tabela/tabela.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MEComponent, TabelaComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <app-tabela></app-tabela>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
