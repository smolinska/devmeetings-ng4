import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  inputValue = '';
  @Input() products: Product[];
  sortAsc = false;

  constructor() {
  }

  ngOnInit() {
    this.sortByPriceLH();
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
    this.products.sort((p1, p2) => p1.price - p2.price);
  }

  sortByPriceHL() {
    this.products.sort((p1, p2) => p2.price - p1.price);
  }

}
