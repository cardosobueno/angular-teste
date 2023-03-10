import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MEComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';
import { TabelaComponent } from './tabela/tabela.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MEComponent, TimerComponent, TabelaComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-me> </app-me>
    <app-timer></app-timer>   
    <app-tabela></app-tabela>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
