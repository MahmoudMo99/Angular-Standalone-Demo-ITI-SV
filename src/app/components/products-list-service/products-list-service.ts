import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';
import { Products } from '../../services/products';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-products-list-service',
  imports: [CurrencyPipe, FormsModule, RouterModule],
  templateUrl: './products-list-service.html',
  styleUrl: './products-list-service.css',
})
export class ProductsListService implements OnInit {
  filterValue: string = '';
  allProducts: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  productsService = inject(Products);

  router = inject(Router);

  ngOnInit(): void {
    this.allProducts = this.productsService.getAllProducts();
    this.filteredProducts = this.allProducts;
  }
  filterProducts() {
    this.filteredProducts = this.productsService.filterProducts(
      this.filterValue
    );
  }

  showDetails(id: number) {
    const product = this.productsService.getDetails(id);
    console.log(product);
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
