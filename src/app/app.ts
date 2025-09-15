import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Side } from './components/side/side';
import { Footer } from './components/footer/footer';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Header, Side, Footer, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('standalone-project');
}
