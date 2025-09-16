import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Side } from './components/side/side';
import { Footer } from './components/footer/footer';
import { Products } from './components/products/products';
import { Timer } from './components/timer/timer';
import { ProductsParent } from "./components/products-parent/products-parent";

@Component({
  selector: 'app-root',
  imports: [Header, Side, Footer, Products, Timer, ProductsParent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('standalone-project');

  showTimer: boolean = true;

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
