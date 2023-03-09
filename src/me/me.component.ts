import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  standalone: true,
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MEComponent implements OnInit {
  myName: string;
  constructor() {
    this.myName = 'Ronaldo';
  }

  ngOnInit() {}
}
