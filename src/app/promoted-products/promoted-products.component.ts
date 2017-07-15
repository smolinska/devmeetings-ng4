import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-promoted-products',
  templateUrl: './promoted-products.component.html',
  styleUrls: ['./promoted-products.component.scss']
})
export class PromotedProductsComponent implements OnInit {
  @Input() product: Product[];

  constructor() { }

  ngOnInit() {
  }

}
