import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductCard } from '../product-card/product-card';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-parent',
  imports: [ProductCard, CurrencyPipe],
  templateUrl: './products-parent.html',
  styleUrl: './products-parent.css',
})
export class ProductsParent {
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
      quantity: 10,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 4,
      name: 'Product 4',
      price: 40,
      quantity: 15,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },

    {
      id: 5,
      name: 'Product 5',
      price: 50,
      quantity: 20,
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
    },
  ];

  cart: IProduct[] = [];

  handleAddToCart(product: IProduct) {
    // this.cart.push(product);
    // alert(product.name + ' : added to cart successfully');

    const existingProduct = this.cart.find((p) => p.id == product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getTotalPrice() {
    let total = 0;
    for (let cartItem of this.cart) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  }
}
