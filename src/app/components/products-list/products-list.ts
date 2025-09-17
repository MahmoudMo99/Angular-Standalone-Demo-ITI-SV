import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit, OnChanges {
  @Input() filter: string = '';
  products: string[] = ['Apple', 'OPPO', 'SAMSUNG', 'Redmi'];

  filterProducts: string[] = [];

  ngOnInit(): void {
    // console.log('ngOnInit called');
    // this.filterProducts = this.products.filter((prd) =>
    //   prd.toLowerCase().includes(this.filter.toLowerCase())
    // );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    this.filterProducts = this.products.filter((prd) =>
      prd.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
