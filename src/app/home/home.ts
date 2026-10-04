import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { Hero } from '../shared/hero/hero';

@Component({
  imports: [Header, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
}
