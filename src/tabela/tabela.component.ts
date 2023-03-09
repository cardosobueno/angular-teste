import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  n: number = 7;

  constructor() {}

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

  ngOnInit() {}
}
