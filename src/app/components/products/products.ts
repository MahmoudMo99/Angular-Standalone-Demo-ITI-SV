import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  imgUrl: string = 'https://www.w3schools.com/w3css/img_lights.jpg';

  products: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 0,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 5,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 5,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 4,
      name: 'Product 4',
      price: 40,
      quantity: 5,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 5,
      name: 'Product 5',
      price: 50,
      quantity: 5,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },
  ];

  addToCart(prod: IProduct) {
    // console.log(prod);
    prod.quantity--;
  }
}
