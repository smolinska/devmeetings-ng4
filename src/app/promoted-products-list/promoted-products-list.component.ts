import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-promoted-products-list',
  templateUrl: './promoted-products-list.component.html',
  styleUrls: ['./promoted-products-list.component.scss']
})
export class PromotedProductsListComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
