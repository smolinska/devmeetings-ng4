import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  filteredProducts: Product[];
  @Input() products: Product[];
  sortAsc = false;



  constructor() {
  }

  ngOnInit() {
    this.filteredProducts = this.products;
    this.sortByPriceLH();
  }

  filter(value) {
    this.filteredProducts = this.products.filter(p =>
      Object.keys(p)
        .filter(k => !Product.excluded.includes(k))
        .some(k => p[k].toString().toLowerCase().includes(value.toLowerCase())));
  }

  toggleSort() {
    if (this.sortAsc) {
      this.sortByPriceLH();
    } else {
      this.sortByPriceHL();
    }
    this.sortAsc = !this.sortAsc;
  }

  sortByPriceLH() {
    this.filteredProducts.sort((p1, p2) => p1.price - p2.price);
  }
  sortByPriceHL() {
    this.filteredProducts.sort((p1, p2) => p2.price - p1.price);
  }

}
