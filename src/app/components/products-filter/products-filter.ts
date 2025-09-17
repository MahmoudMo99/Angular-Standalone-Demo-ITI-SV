import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsList } from '../products-list/products-list';

@Component({
  selector: 'app-products-filter',
  imports: [FormsModule, ProductsList],
  templateUrl: './products-filter.html',
  styleUrl: './products-filter.css',
})
export class ProductsFilter {
  filterText: string = '';
}
