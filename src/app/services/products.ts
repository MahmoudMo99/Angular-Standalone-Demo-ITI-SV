import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Products {
  products: IProduct[] = [
    {
      id: 1,
      name: 'APPLE',
      price: 10,
      quantity: 0,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 2,
      name: 'BANANA',
      price: 20,
      quantity: 5,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 3,
      name: 'ORANGE',
      price: 30,
      quantity: 10,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 4,
      name: 'PINEAPPLE',
      price: 40,
      quantity: 15,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 5,
      name: 'MANGO',
      price: 50,
      quantity: 20,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },
  ];

  getAllProducts() {
    return this.products;
  }

  filterProducts(filter: string) {
    return this.products.filter((prd) =>
      prd.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  getDetails(id: number) {
    return this.products.find((prd) => prd.id == id);
  }
}
