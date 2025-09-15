import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userName: string = 'Mahmoud Mohamed';

  inputValue: string = 'My Name is Mahmoud';

  imgUrl: string = 'images/car.jpg';
  notFoundImage: string = 'Car Image';
  imgFluid: string = 'img-fluid';

  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }
  toggleImageSrc() {
    this.imgUrl =
      this.imgUrl === 'images/car.jpg'
        ? 'images/red-car.jpg'
        : 'images/car.jpg';
  }
}
