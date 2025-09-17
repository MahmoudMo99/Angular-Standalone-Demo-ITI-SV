import { Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-details',
  imports: [CurrencyPipe],
  templateUrl: './products-details.html',
  styleUrl: './products-details.css',
})
export class ProductsDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);

  productsService = inject(Products);

  // currentProduct: IProduct | undefined;
  currentProduct!: IProduct;

  id: number = 0;

  ngOnInit(): void {
    this.getIdFromRoute();
    this.loadData();
  }

  getIdFromRoute() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  loadData() {
    // this.currentProduct = this.productsService.getDetails(this.id);
    this.currentProduct = this.productsService.getDetails(this.id)!;
  }
}
